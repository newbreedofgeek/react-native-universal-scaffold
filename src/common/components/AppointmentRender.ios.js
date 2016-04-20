'use strict';

import { Component } from 'react';

import React, {
  StyleSheet,
  ListView,
  Text,
  View,
  Image
} from 'react-native';

export default function () {
  var avatar = 'https://api.adorable.io/avatars/285/'+this.props.name.replace(" ","")+'.png';

  return (
    <View style={styles.wrapper}>
      <View>
      <Image style={styles.pic} source={{uri: avatar}}
      />
      </View>
      <View style={styles.bg}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.dob}>{this.props.dob}</Text>
      </View>
      <View>
        <Text style={styles.doctor}>{this.props.doctor}</Text>
      </View>
      <View>
        <Text style={styles.time}>{this.props.time}</Text>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  bg: {
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  name: {
    fontSize: 13,
    fontWeight: "100",
    color: 'black',
    textAlign: 'left',
    width: 80
  },
  pic: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10
  },
  dob: {
    fontSize: 8,
    fontWeight: "100",
    color: 'black',
    textAlign: 'left',
  },
  doctor: {
    fontSize: 8,
    color: 'black',
  },
  time: {
    fontSize: 8,
    color: 'black',
  }
});
