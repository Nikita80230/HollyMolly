import { createSlice } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "./operations";

const handleGetProfileFulfilled = (state, action) => {
    console.log(action.payload)
  state.user = action.payload;
};

const handleUpdateProfile = (state, action) => {
  state.user = { ...state.user, ...action.payload };
};

const initialState = {
  user:{
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    city: "",
    deliveryAddress: "",}
  
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, handleGetProfileFulfilled)
      .addCase(updateProfile.fulfilled, handleUpdateProfile);
  },
});

export const userReducer = userSlice.reducer;
