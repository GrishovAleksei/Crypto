import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Title from './UI/Title'

export default function Table({ ticker, values }) {
  return (
    <View style={styles.container}>
      <Title title={ticker} />
      <Text style={styles.column}>
        {values.last}
      </Text>
      <Text style={styles.column}>
        {values.highestBid}
      </Text>
      <Text style={styles.column}>
        {values.percentChange}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  column: {
    borderLeftWidth: 1,
    borderColor: 'black',
  }
})
