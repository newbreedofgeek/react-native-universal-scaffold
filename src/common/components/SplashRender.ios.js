'use strict';

import Render from './SplashRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
