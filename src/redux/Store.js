import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authentication/AuthReducer';
import UserJobSlice from './userJob/UserJobReducer';
import LawyerSlice from './lawyer/LawyerReducer';
import userSlice from './userSlice';

const Store = configureStore({
  reducer: {
    user:userSlice,
    auth: authSlice,
    userJob: UserJobSlice,
    lawyer: LawyerSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default Store;
