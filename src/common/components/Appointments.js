'use strict';

import Base from './AppointmentsBase';
import Render from './AppointmentsRender';

export default class Appointments extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
