'use strict';

import Base from './SplashBase';
import Render from './SplashRender';

export default class Splash extends Base {
  constructor(props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
