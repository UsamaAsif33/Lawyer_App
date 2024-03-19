import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 isUserLoggedIn:false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

export const { setUserState} = userSlice.actions;

export default userSlice.reducer;   
