import axios from 'axios'

const baseUrl = 'https://poloniex.com/public?command=returnTicker'

export default {
  fetchTickers() {
    const request = axios.create({
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return request.get(`${baseUrl}`);
  },
}
