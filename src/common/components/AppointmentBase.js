'use strict';

import { Component } from 'react';
import ClinicActions from '../actions/ClinicActions';

class Appointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  _onChange() {
    console.log('AppointmentBase');
  }

  handleClick() {
    ClinicActions.selectAppointment(this.props.item);
  }
}

module.exports = Appointment;
