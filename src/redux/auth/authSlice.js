import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handelRegisterFulfilled = (state, action) => {
       state.user = action.payload.userEmail;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
};

const handelLoginFulfilled = (state, action) => {
      state.user = action.payload.userEmail;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
};

const handelLogOutFulfilled = state => {
    state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
};

const handelRefreshUserPending = state => {
    state.isRefreshing = true;
};

const handelRefreshUserFulfilled = (state, action) => {
    state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
};

const handelRefreshUserRejected = state => {
    state.isRefreshing = false;
};
 const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
   isRefreshing: false,
};   

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, handelRegisterFulfilled)
            .addCase(logIn.fulfilled, handelLoginFulfilled)
            .addCase(logOut.fulfilled, handelLogOutFulfilled)
            .addCase(refreshUser.pending, handelRefreshUserPending)
            .addCase(refreshUser.fulfilled, handelRefreshUserFulfilled)
            .addCase(refreshUser.rejected, handelRefreshUserRejected)
    },
});

export const authReducer = authSlice.reducer;