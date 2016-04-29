'use strict';

import Appointments from './Appointments';

import React, {
  StyleSheet,
  View,
  Platform
} from 'react-native';

export default function (props, state) {
  return (
      <View style={styles.container}>
        <Appointments />
      </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
