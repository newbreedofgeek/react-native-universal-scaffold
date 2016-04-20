'use strict';

import Render from './AppointmentsRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
