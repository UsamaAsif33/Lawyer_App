import {createSlice} from '@reduxjs/toolkit';
import {getLawyerReq} from './LawyerActions';

const LawyerSlice = createSlice({
  name: 'Lawyer',
  initialState: {
    job: {},
    jobDetail: {},
    status: 'idle',
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(getLawyerReq.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getLawyerReq.fulfilled, (state, action) => {
      state.job = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(getLawyerReq.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
  },
});
export default LawyerSlice.reducer;
