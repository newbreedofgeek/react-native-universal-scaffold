'use strict';

import { Component } from 'react';
import ClinicStore from '../stores/ClinicStore';

function getClinicState() {
  return {
    activeAppointment: (ClinicStore.getActiveAppointment().name ? ClinicStore.getActiveAppointment().name + ', ' : '')
  };
}

class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeAppointment: '',
      visible: false
    };

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ClinicStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ClinicStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getClinicState());
  }
}

module.exports = Splash;
