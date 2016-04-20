'use strict';

import React from 'react';
import Splash from './Splash';
import Appointments from './Appointments';

      // <Appointments />

export default function (props, state) {
  var View = state.activeViewState === 1 ? Appointments : Splash;

  return (
    <div className='main'>
      <View />
    </div>
  );
}
