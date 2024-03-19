import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import thunk from 'redux-thunk';

import getRoute from '../../helpers/ApiUrls';
import {showToast} from '../../components/Toast/Toast';

export const signUpUserPostReq = createAsyncThunk(
  'userSignUpPostReq',
  async data => {
    let signUpRoute = getRoute('Signup');
    try {
      const res = await axios.post(signUpRoute, data);
      showToast('SignUp Successfully');
      return res.data;
    } catch (error) {
      showToast(error.response.data.message.toString());
      return thunk.rejectWithValue(error);
    }
  },
);
export const loginUserPostReq = createAsyncThunk(
  'userLoginPostReq',
  async data => {
    let loginRoute = getRoute('Login');
    try {
      const res = await axios.post(loginRoute, data);
      return res;
    } catch (error) {
      showToast(error.response.data.message.toString());
      return thunk.rejectWithValue(error);
    }
  },
);
export const getSubscriptionsAction = createAsyncThunk(
  'getSubscriptionsAction',

  async data => {
    let subscriptionRoute = getRoute('GetSubscriptions');
    try {
      const res = await axios.get(subscriptionRoute, data);
      return res;
    } catch (error) {
      showToast(error.response.data.message.toString());
      return thunk.rejectWithValue(error);
    }
  },
);

// FETCH USER DATA 
export const getUserDataAction = createAsyncThunk(
  'getUserDataAction',
  async () => {
    let userDataRoute = getRoute('GetUserData');
    try {
      const res = await axios.get(userDataRoute);
      return res;
    } catch (error) {
      showToast(error.response.data.message.toString());
      return thunk.rejectWithValue(error);
    }
  },
);
