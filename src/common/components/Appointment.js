'use strict';

import Base from './AppointmentBase';
import Render from './AppointmentRender';

export default class Appointment extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
