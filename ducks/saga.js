import { all } from 'redux-saga/effects';
import { saga as tickersSaga } from './tickers/saga';

export default function* rootSaga() {
  yield all([
    tickersSaga(),
  ]);
}
