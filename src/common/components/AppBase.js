'use strict';

import { Component } from 'react';
import ClinicStore from '../stores/ClinicStore';
import ClinicActions from '../actions/ClinicActions';

function getAppViewState() {
  return {
    activeViewState: ClinicStore.getAppViewState()
  };
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = getAppViewState();

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ClinicStore.addChangeListener(this._onChange);

    setTimeout(function() {
        ClinicActions.updateActiveScreen();
    }, 3000);
  }

  componentWillUnmount() {
    ClinicStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppViewState());
  }
}

module.exports = App;
