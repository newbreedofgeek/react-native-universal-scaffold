'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import ClinicConstants from '../constants/ClinicConstants';

var ClinicActions = {
  
  selectAppointment: function(item) {
    AppDispatcher.dispatch({
      type: ClinicConstants.APPOINTMENT_SELECTED,
      item: item
    });
  },

  updateAppointments: function(appointments) {
    AppDispatcher.dispatch({
      type: ClinicConstants.APPOINTMENTS_UPDATED,
      appointments: appointments
    });
  },

};

module.exports = ClinicActions;
