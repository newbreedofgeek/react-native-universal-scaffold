'use strict';

import React from 'react';

// <div> {state.activeAppointment} welcome back to our clinic...</div>

export default function (props, state) {
  return (
    <div className='splash'>
      <img src='https://lifeletters-cms.s3.amazonaws.com/_600x168_fit_center-center_80/lifeletters-logo-white.png' />
      <div className='title'> Clinic App </div>
      <div className='loading'> Loading... </div>
    </div>
  );
}
