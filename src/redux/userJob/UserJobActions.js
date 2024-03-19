import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import getRoute from '../../helpers/ApiUrls';

export const jobUserGetReq = createAsyncThunk(
  'userJobGetReq',
  async textInputValue => {
    const UserPostedJobRoute=getRoute("GetUserPostedJobs");
    try {
      const res = await axios.get(
        UserPostedJobRoute + `query=${textInputValue}`,
      );
      return res.data;
    } catch (error) {
      console.log('Error', error);
    }
  },
);
export const usersJobAction = createAsyncThunk(
  'usersJobAction',
  async ({textInputValue, categoryId}) => {
    // const params = new URLSearchParams({
    //   query: textInputValue || "",
    //   category: categoryId || ""
    // }).toString();
    // console.log("Params",params);
    const PostedJobRoute=getRoute("GetPostedJobs")  +
    `query=${textInputValue ? textInputValue : ""}&category=${categoryId ? categoryId:""}`;
    try {
      const res = await axios.get(
        PostedJobRoute
      );
      return res.data;
    } catch (error) {
      console.log('Error', error);
    }
  },
);
export const jobPostedTitleGetReq = createAsyncThunk(
  'jobPostedTitleGetReq',
  async () => {
    try {
      const res = await axios.get(getRoute('GetJobs'));
      return res.data;
    } catch (error) {
      console.log('Error', error);
    }
  },
);
export const jobPostedDetailGetReq = createAsyncThunk(
  'jobPostedDetailGetReq',
  async data => {
    try {
      const res = await axios.get(getRoute('GetJob') + data);
      return res.data;
    } catch (error) {
      console.log('Error', error);
    }
  },
);
export const jobPostUserPostReq = createAsyncThunk(
  'jobPostUserPostReq',
  async data => {
    let responseMsg;
    try {
      const res = await axios.post(getRoute('PostJob'), data);
      responseMsg = res.data;
      return responseMsg;
    } catch (error) {
      console.log('Error', error.response.data);
    }
  },
);
export const getMyJobsReq = createAsyncThunk('getMyJobsReq', async data => {
  let responseMsg;
  try {
    const res = await axios.get(getRoute('GetMyJobs'), data);
    responseMsg = res.data;
    return responseMsg;
  } catch (error) {
    console.log('Error', error.response.data);
  }
});
export const jobCategoriesAction = createAsyncThunk(
  'categoriesAction',
  async data => {
    try {
      const res = await axios.get(getRoute('GetCategories'));
      responseMsg = res.data;
      return responseMsg;
    } catch (error) {
      console.log('Error', error.response.data);
    }
  },
);
