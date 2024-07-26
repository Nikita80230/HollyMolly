import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOutAllDevices, refreshUser, authGoogle } from "./operations";

const handelRegisterFulfilled = (state, action) => {
  state.user = action.payload.userEmail;
  
};

const handelLoginFulfilled = (state, action) => {
  state.user = action.payload.userEmail;
  state.token = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.isLoggedIn = true;
  state.rememberMe = action.payload.rememberMe; 
  
};

const handelLogOutAllDevicesFulfilled = (state) => {
  state.user = { email: null };
  state.token = null;
  state.refreshToken = null;
  state.isLoggedIn = false;
  state.rememberMe = false; 
   
};

const handelRefreshUserPending = (state) => {
  state.isRefreshing = true;

};

const handelRefreshUserFulfilled = (state, action) => {
  state.user = action.payload.userEmail;
  state.token = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handelRefreshUserRejected = (state) => {
  state.isRefreshing = false;
};

const handleAuthGoogleFulfilled = (state, action) => {
  state.user = action.payload.userEmail;
  state.token = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.isLoggedIn = true;
 state.rememberMe = action.payload.rememberMe; 
};

const initialState = {
  user: { email: null },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  rememberMe:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
     logOut: (state) => {
      state.token = null;
  state.refreshToken = null;
  state.isLoggedIn = false;
  state.rememberMe = false; 
      
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handelRegisterFulfilled)
      .addCase(logIn.fulfilled, handelLoginFulfilled)
      .addCase(logOutAllDevices.fulfilled, handelLogOutAllDevicesFulfilled)
      .addCase(refreshUser.pending, handelRefreshUserPending)
      .addCase(refreshUser.fulfilled, handelRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handelRefreshUserRejected)
      .addCase(authGoogle.fulfilled, handleAuthGoogleFulfilled);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;