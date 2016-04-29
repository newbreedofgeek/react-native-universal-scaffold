'use strict';

import { Component } from 'react';
import ClinicStore from '../stores/ClinicStore';
import ClinicActions from '../actions/ClinicActions';
import { ListView } from 'react-native';

class Appointments extends Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = this._getClinicAppointmentsState();

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');

    this.serverRequest = fetch('http://private-7572c-dentistapp.apiary-mock.com/appointments').then(function(response) {
        return response.json();
      }).then(function(json) {
        let baseTime;

        var updatedAppointments = json.map((item, index) => {
            if (index === 0) {
              baseTime = parseInt(item.time);
              item.time = baseTime;
            }
            else {
              item.time = baseTime + (15 * 60 * 1000);
              baseTime = item.time;
            }

            item.timeFriendly = new Date(item.time).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});

            return item;
        });


        ClinicActions.updateAppointments(updatedAppointments);
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      });

    ClinicStore.addChangeListener(this._onChange);

    var listViewScrollView = this.refs.listView.getScrollResponder();
    // listViewScrollView.scrollTo(1);  // Hack to get ListView to render fully
    listViewScrollView.scrollTo({x: 1, y: 1, animated: true})  // Hack to get ListView to render fully
  }

  componentWillUnmount() {
    this.serverRequest.abort();
    ClinicStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this._getClinicAppointmentsState());
  }

  _getClinicAppointmentsState() {
    return {
      clinicAppointments: ClinicStore.getClinicAppointments(),
      activeAppointment: ClinicStore.getActiveAppointment(),
      dataSource: this.ds.cloneWithRows(ClinicStore.getClinicAppointments())
    };
  }
}

module.exports = Appointments;
