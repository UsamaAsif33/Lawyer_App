import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/navigation/route';
import axios from 'axios';
import {BASEURL} from '@env';
import {LogBox, Text} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import { getItemFromAsyncStorage } from './src/utils/storage/asyncStorage';
LogBox.ignoreAllLogs();

const App = () => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  axios.defaults.baseURL = BASEURL;
  axios.interceptors.request.use(
    async config => {
      const getTokenFromAsync = await getItemFromAsyncStorage('Token') ;
      if (getTokenFromAsync) {
        config.headers['Authorization'] = 'Bearer ' + getTokenFromAsync;
      }
      config.headers.Accept = 'application/json';
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    err => {
      return Promise.reject(err);
    },
  );

  return (
    <Provider store={Store}>
      <Route />
    </Provider>
  );
};
export default App;
