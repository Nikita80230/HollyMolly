import { createSlice } from "@reduxjs/toolkit";
import { createProfile, getProfile, updateProfile, updateUserEmail } from "./operations";

const handleGetProfileFulfilled = (state, action) => {
  state.user.email = action.payload.email;
  state.user.id = action.payload.id;
  state.profiles = action.payload.profiles;
};

const handleUpdateProfile = (state, action) => {
  state.profiles = { ...state.profiles, ...action.payload.profile };
};

const handleCreateProfile = (state, action) => {
  state.profiles = action.payload;
  
}

const handleUpdateEmailFulfilled = (state, action) => {
  console.log(action.payload);
   state.user = {...state.user, ...action.payload}
}

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
      .addCase(createProfile.fulfilled, handleCreateProfile)
      .addCase(updateUserEmail.fulfilled, handleUpdateEmailFulfilled)
     .addCase(updateUserEmail.rejected, (state, action) => {
        console.error("Помилка при оновленні електронної пошти:", action.payload);
      });
  },
});

export const userReducer = userSlice.reducer;
