import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { fetchTickersRequest } from '../ducks/tickers/actions'
import { tickersSelector } from '../ducks/tickers/reducers'
import List from '../components/List'

function HomeScreen(props) {
  const {
    tickers,
    navigation,
    fetchTickersRequest: fetchTickers,
  } = props
  useEffect(() => {
    fetchTickers()
  }, [])

  const onPressHandler = (ticker) => {
    navigation.navigate('TickerScreen', { ticker })
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {tickers
        ? <List tickers={Object.keys(tickers)} onPress={onPressHandler}/>
        : <ActivityIndicator size="large" color="#00ff00"/>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect((state) => ({
  tickers: tickersSelector(state),
}), {
  fetchTickersRequest,
})(HomeScreen);
