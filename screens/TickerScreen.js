import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import { connect } from 'react-redux';
import { fetchTickersRequest } from '../ducks/tickers/actions';
import { tickersSelector, errorSelector } from '../ducks/tickers/reducers';
import Table from '../components/Table'
import Title from '../components/UI/Title';

function TickerScreen(props) {
  const {
    route,
    error,
    tickers,
    fetchTickersRequest: fetchTickers,
  } = props
  const { ticker } = route.params

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every 5 second!');
      fetchTickers()
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <View>
      <Title title={ticker} />
      {error &&
        <Text style={styles.error}>{error[0]}</Text>
      }
      <Table ticker={ticker} values={tickers[ticker]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red'
  },
});

export default connect((state) => ({
  error: errorSelector(state),
  tickers: tickersSelector(state),
}), {
  fetchTickersRequest,
})(TickerScreen);
