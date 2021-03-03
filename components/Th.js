import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default function Th({ titles }) {
  return (
    <View style={styles.row}>
      {titles.map((title, index) =>
        <View style={styles.column} key={index}>
          <Text style={styles.text}>
            {title}
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
