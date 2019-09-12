import Axios from 'axios';

const ApiService = {
  baseUrl() {
    return 'http:localhost:9999/api';
  },

  get(url, data = null) {
    const apiUrl = `${this.baseUrl}/${url}`;
    return Axios.get(apiUrl, { data });
  },

  post(url, data = null) {
    const apiUrl = `${this.baseUrl}/${url}`;
    return Axios.post(apiUrl, { data });
  },

  put(url, data = null) {
    const apiUrl = `${this.baseUrl}/${url}`;
    return Axios.put(apiUrl, { data });
  },

  delete(url, data = null) {
    const apiUrl = `${this.baseUrl}/${url}`;
    return Axios.delete(apiUrl, { data });
  },
};

export default ApiService;
