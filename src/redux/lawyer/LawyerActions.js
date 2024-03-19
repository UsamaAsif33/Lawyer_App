import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import getRoute from '../../helpers/ApiUrls';

export const getLawyerReq = createAsyncThunk('getLawyerReq', async data => {
  let responseMsg;
  try {
    const res = await axios.get(getRoute("GetLawyers"), data);
    responseMsg = res.data;
    return responseMsg;
  } catch (error) {
    console.log('Error', error.response.data);
  }
});
