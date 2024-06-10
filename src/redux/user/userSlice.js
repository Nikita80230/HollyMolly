import { createSlice } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "./operations";

const handleGetProfileFulfilled = (state, action) => {
  state.user.email = action.payload.email;
  state.user.id = action.payload.id;
  state.profiles = action.payload.profiles;
};

const handleUpdateProfile = (state, action) => {
  state.profiles = { ...state.profiles, ...action.payload.profile };
};

const initialState = {
  user: {
    email: "",
    id: "",
  },
  profiles: [],
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
