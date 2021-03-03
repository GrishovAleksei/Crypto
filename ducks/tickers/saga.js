import {
  all, call, takeLatest, put
} from 'redux-saga/effects';
import {
  FETCH_TICKERS_REQUEST,
  FETCH_TICKERS_SUCCESS,
  FETCH_TICKERS_ERROR,
} from './constants';
import apiService from '../../api';

export const fetchTickersRequestSaga = function* () {
  try {
    const request = yield call(apiService.fetchTickers);
    yield put({
      type: FETCH_TICKERS_SUCCESS,
      payload: { tickers: request.data }
    });
  } catch (error) {
    console.log('FETCH_TICKERS_REQUEST_ERROR', error);
    yield put({
      type: FETCH_TICKERS_ERROR,
      payload: { error }
    });
  }
};

export function* saga() {
  yield all([
    takeLatest(FETCH_TICKERS_REQUEST, fetchTickersRequestSaga),
  ]);
}
