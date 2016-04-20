'use strict';

describe('ClinicActions', function() {
  var action;

  beforeEach(function() {
    action = require('../../../common/actions/ClinicActions.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });

  it('should find "selectAppointment" action', function() {
    expect(action.selectAppointment).toBeDefined();
  });

  it('should find "updateAppointments" action', function() {
    expect(action.updateAppointments).toBeDefined();
  });
});
