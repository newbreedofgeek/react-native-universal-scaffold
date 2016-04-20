'use strict';

import Base from './AppBase';
import Render from './AppRender';

export default class App extends Base {
  constructor(props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
