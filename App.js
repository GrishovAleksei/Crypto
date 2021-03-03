import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import MainNavigator from './navigation/index';
import rootSaga from './ducks/saga';
import tickersReducer from './ducks/tickers/reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tickers: tickersReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
