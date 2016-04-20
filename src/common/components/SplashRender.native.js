'use strict';

import React, {
  StyleSheet,
  Image,
  Text,
  View,
  Platform
} from 'react-native';

export default function (props, state) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.logo}
          source={{uri: 'https://lifeletters-cms.s3.amazonaws.com/_600x168_fit_center-center_80/lifeletters-logo-white.png'}}
        />

        <Text style={styles.introText}>
          Clinic App
        </Text>

        <Text style={styles.loading}>
          Loading...
        </Text>
    </View>
  );
}

var styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 50,
    backgroundColor: '#333',
    height: 1000
  },
  logo: {
    flexDirection: 'row',
    width: 190,
    height: 53,
    marginLeft: -10,
  },
  introText: {
    flexDirection: 'row',
    color: '#e6e6e6',
    marginTop: 41,
    marginLeft: -130,
    width: 100,
    height: 100
  },
  loading: {
    flexDirection: 'row',
    color: '#e6e6e6',
    marginTop: 60,
    marginLeft: -99,
    width: 100,
    height: 100,
    fontSize: 10,
    opacity: .6
  }
});
