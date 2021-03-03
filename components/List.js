import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native'
import ListItem from './UI/ListItem'

export default function List({ tickers, onPress }) {
  return (
    <View style={styles.list}>
      {
        tickers.map((ticker, index) => 
          <ListItem ticker={ticker} onPress={onPress} key={index}/>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
