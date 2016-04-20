'use strict';

// TODO: Give this a go for the listview - https://rnplay.org/apps/xnyaYw

import Appointment from './Appointment';

import React, {
  StyleSheet,
  ListView,
  View,
  Text
} from 'react-native';

export default function (props, state) {
  return (
    <ListView
        ref="listView"
        automaticallyAdjustContentInsets={false}
        enableEmptySections={true}
        dataSource={state.dataSource}
        renderRow={ (rowData) => {return <Appointment {...rowData} style={styles.row} />} }
      />
  );
}

var styles = StyleSheet.create({
  title: {
    flex: 1,
    padding: 5
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
