'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ClinicConstants from '../constants/ClinicConstants';

var CHANGE_EVENT = 'change';
var _appViewStates = {
  'SPLASH': 0,
  'APPOINTMENTS': 1
};
var _activeAppViewState = _appViewStates.SPLASH;
var _appointmentActiveFor = {};
var _clinicAppointments = [];

// var _clinicAppointments = [
//   {
//     "id": "100",
//     "name": "Mark Paul",
//     "dob": "24/08/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "10.15am"
//   },
//   {
//     "id": "101",
//     "name": "Tom Smith",
//     "dob": "01/03/1989",
//     "doctor": "Dr Jeffery Sia",
//     "time": "10.30am"
//   },
//   {
//     "id": "102",
//     "name": "Andrew Norman",
//     "dob": "01/03/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "10.45am"
//   },
//   {
//     "id": "103",
//     "name": "Jack Johnson",
//     "dob": "01/03/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "11.00am"
//   },
//   {
//     "id": "104",
//     "name": "Siman Pain",
//     "dob": "01/03/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "11.15am"
//   },
//   {
//     "id": "105",
//     "name": "Mark Paul",
//     "dob": "24/08/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "10.15am"
//   },
//   {
//     "id": "106",
//     "name": "Tom Smith",
//     "dob": "01/03/1989",
//     "doctor": "Dr Jeffery Sia",
//     "time": "10.30am"
//   },
//   {
//     "id": "107",
//     "name": "Andrew Norman",
//     "dob": "01/03/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "10.45am"
//   },
//   {
//     "id": "108",
//     "name": "Jack Johnson",
//     "dob": "01/03/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "11.00am"
//   },
//   {
//     "id": "109",
//     "name": "Siman Pain",
//     "dob": "01/03/1982",
//     "doctor": "Dr Jeffery Sia",
//     "time": "11.15am"
//   }];

var ClinicStore = assign({}, EventEmitter.prototype, {
  getAppViewState: function() {
    return _activeAppViewState;
  },
  getActiveAppointment: function() {
    return _appointmentActiveFor;
  },
  getClinicAppointments: function() {
    return _clinicAppointments;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

ClinicStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {
    case ClinicConstants.UPDATE_SCREEN:
      _activeAppViewState = _appViewStates.APPOINTMENTS;
      ClinicStore.emitChange();
      break;
    case ClinicConstants.APPOINTMENT_SELECTED:
      var item = action.item;
      _appointmentActiveFor = item;
      ClinicStore.emitChange();
      break;
    case ClinicConstants.APPOINTMENTS_UPDATED:
      _clinicAppointments = action.appointments;
      ClinicStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = ClinicStore;
