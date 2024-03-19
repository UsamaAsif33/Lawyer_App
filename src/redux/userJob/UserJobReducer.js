import {createSlice} from '@reduxjs/toolkit';
import {
  getMyJobsReq,
  jobCategoriesAction,
  jobPostUserPostReq,
  jobPostedDetailGetReq,
  jobPostedTitleGetReq,
  jobUserGetReq,
  usersJobAction,
} from './UserJobActions';

const UserJobSlice = createSlice({
  name: 'UserJob',
  initialState: {
    myJob:{},
    jobCategory: {},
    job: {},
    jobDetail: {},
    status: 'idle',
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(jobUserGetReq.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(jobUserGetReq.fulfilled, (state, action) => {
      state.job = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(jobUserGetReq.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
    builder.addCase(usersJobAction.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(usersJobAction.fulfilled, (state, action) => {
      state.job = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(usersJobAction.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
    builder.addCase(jobPostUserPostReq.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(jobPostUserPostReq.fulfilled, (state, action) => {
      state.job = action.payload;
    });
    builder.addCase(jobPostUserPostReq.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
    builder.addCase(jobPostedTitleGetReq.pending, (state, action) => {
      state.status = 'loading';
      state.jobDetail = {};
    });
    builder.addCase(jobPostedTitleGetReq.fulfilled, (state, action) => {
      state.job = action.payload;
    });
    builder.addCase(jobPostedTitleGetReq.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
    builder.addCase(jobPostedDetailGetReq.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(jobPostedDetailGetReq.fulfilled, (state, action) => {
      state.jobDetail = action.payload;
    });
    builder.addCase(jobPostedDetailGetReq.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
    builder.addCase(getMyJobsReq.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getMyJobsReq.fulfilled, (state, action) => {
      state.myJob = action.payload;
    });
    builder.addCase(getMyJobsReq.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
    builder.addCase(jobCategoriesAction.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(jobCategoriesAction.fulfilled, (state, action) => {
      state.jobCategory = action?.payload;
    });
    builder.addCase(jobCategoriesAction.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
  },
});
export default UserJobSlice.reducer;
