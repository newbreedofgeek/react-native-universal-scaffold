'use strict';

import Splash from './Splash';
import Appointments from './Appointments';

import React, {
  StyleSheet,
  View,
  Platform
} from 'react-native';

export default function (props, state) {
  var ActiveView = state.activeViewState === 1 ? Appointments : Splash;

  return (
      <View style={styles.container}>
        <ActiveView />
      </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
