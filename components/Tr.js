import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default function Th({ keys, values }) {
  return (
    <View style={styles.row}>
      {keys.map((item, index) =>
        <View style={styles.column} key={index}>
          <Text style={styles.text}>
            {values[item]}
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 30,
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
  column: {
    flex: 1,
    borderWidth: 0.5
  }
})


