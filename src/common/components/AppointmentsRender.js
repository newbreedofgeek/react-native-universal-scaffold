'use strict';

// TODO: I need to refactor the onClick to what seems a better pattern of React: http://red-badger.com/blog/2015/03/04/react-native-the-killer-feature-that-nobody-talks-about/

import React from 'react';
import Appointment from './Appointment';

export default function (props, state) {
  return (
    <div className='appointments'>
      <div className='header'> Select a patient</div>
      <div className='table'>
        <div className='appointment-header'>
          <div className='pic'></div>
          <div className='name-dob'>Name / DOB</div>
          <div className='doctor'>Doctor</div>
          <div className='appointment-time'>Appointment</div>
        </div>

        {
          state.clinicAppointments.map(function(item, index) {
                var isSelected = (state.activeAppointment.name == item.name) ? true : false;

                return <Appointment key={item.id} item={item} isSelected={isSelected} />
            })
        }
      </div>
    </div>
  );
}
