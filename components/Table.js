import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'
import Th from './Th'
import Tr from './Tr'
import Title from './UI/Title'

export default function Table({ ticker, values }) {
  const titles = ['last', 'highestBid', 'percentChange']

  return (
    <View style={styles.container}>
      <Th titles={titles} />
      <Tr keys={titles} values={values} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
