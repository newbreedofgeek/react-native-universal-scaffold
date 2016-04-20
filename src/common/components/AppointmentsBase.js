'use strict';

import { Component } from 'react';
import ClinicStore from '../stores/ClinicStore';
import ClinicActions from '../actions/ClinicActions';

function getClinicAppointmentsState() {
  return {
    clinicAppointments: ClinicStore.getClinicAppointments(),
    activeAppointment: ClinicStore.getActiveAppointment()
  };
}

class Appointments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clinicAppointments: ClinicStore.getClinicAppointments(),
      activeAppointment: ClinicStore.getActiveAppointment(),
    };

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    this.serverRequest = fetch('http://private-e81a7-lifelettersclinicapp.apiary-mock.com/appointments').then(function(response) {
        return response.json();
      }).then(function(json) {
        ClinicActions.updateAppointments(json);
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      });

    // Notes: https://facebook.github.io/react/tips/initial-ajax.html

    ClinicStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    this.serverRequest.abort();
    ClinicStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getClinicAppointmentsState());
  }
}

module.exports = Appointments;
