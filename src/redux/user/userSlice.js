import { createSlice } from "@reduxjs/toolkit";
import { createProfile, getProfile, updateProfile } from "./operations";

const handleGetProfileFulfilled = (state, action) => {
  state.user.email = action.payload.email;
  state.user.id = action.payload.id;
  state.profiles = action.payload.profiles;
};

const handleUpdateProfile = (state, action) => {
  const updatedProfile = action.payload;
  
  state.profiles = state.profiles.map((profile) =>
    profile.id === updatedProfile.id ? updatedProfile : profile
  );
};

const handleCreateProfile = (state, action) => {
  state.profiles = action.payload;
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
      .addCase(updateProfile.fulfilled, handleUpdateProfile)
      .addCase(createProfile.fulfilled, handleCreateProfile);
  },
});

export const userReducer = userSlice.reducer;
