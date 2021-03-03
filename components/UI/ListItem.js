import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Title from './Title'

export default function ListItem({ ticker, onPress }) {
  const onPressHandler = () => onPress(ticker)
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPressHandler}
    >
      <Title title={ticker} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
