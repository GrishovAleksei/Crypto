import {
  FETCH_TICKERS_SUCCESS,
  FETCH_TICKERS_ERROR,
} from './constants'

const initialState = {
  tickers: undefined,
  error: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKERS_SUCCESS:
      return {
        tickers: action.payload.tickers,
      };
    case FETCH_TICKERS_ERROR:
      return {
        error: action.payload.error
      }
    default:
      return state
  }
};

export const tickersSelector = (state) => state.tickers.tickers
export const errorSelector = (state) => state.tickers.error
