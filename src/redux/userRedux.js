import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    //dar hal vakonesh
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
  },
  loginSuccess: (state, action) => {
    state.isFetching = false;
    state.currentUser = action.payload;
  },
  //vorod na movafagh
  loginFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
});
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
//
