import Axios from 'axios';
import {BASEURL} from '@env';
import Store from './src/redux/Store';
import axios from 'axios';

// const instance = Axios.create({
//   // BASEURL: BASEURL,
//   timeout: 30000,
// });

axios.interceptors.request.use(
  async config => {
    const data = Store?.getState().auth?.userData;
    const token = data?.token;
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

// export default instance;
