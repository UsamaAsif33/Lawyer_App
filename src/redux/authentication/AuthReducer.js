import { createSlice } from "@reduxjs/toolkit";
import {  getSubscriptionsAction, loginUserPostReq, signUpUserPostReq ,getUserDataAction} from "./AuthActions";

const authSlice = createSlice({
  name: 'AuthenticationUser',
  initialState: {
    userData: null,
    status: 'idle',
    error: null,
    buyPlanData:null,
  },
  reducers:{
    setUserStatus: (state, action) => {
      state.status = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(signUpUserPostReq.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(signUpUserPostReq.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.status='fullfilled';
      
    });
    builder.addCase(signUpUserPostReq.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action?.payload?.error;
    });
    builder.addCase(loginUserPostReq.pending, (state, action) => {
        state.status = "loading";
      });
      builder.addCase(loginUserPostReq.fulfilled, (state, action) => {
        state.userData = action.payload.data;
        state.status='fullfill';
      });
      builder.addCase(loginUserPostReq.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload?.error
      });
      builder.addCase(getSubscriptionsAction.pending, (state, action) => {
        state.status = "loading";
      });
      builder.addCase(getSubscriptionsAction.fulfilled, (state, action) => {
        state.buyPlanData = action.payload.data;
        state.status = "fullfilled";
  
      });
      builder.addCase(getSubscriptionsAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload?.error
      });
      builder.addCase(getUserDataAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload?.error
      });
      builder.addCase(getUserDataAction.pending, (state, action) => {
        state.status = 'loading';
      });
      builder.addCase(getUserDataAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.status='fullfilled';
        
      });
  },
});
export const { setUserStatus ,setUserData} = authSlice.actions;
export default authSlice.reducer;
