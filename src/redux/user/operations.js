import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getProfile= createAsyncThunk(
  "user/getProfile",
  async (_, thunkAPI) => {
     const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
       setAuthHeader(persistedToken);
      const res = await axios.get("/api/Account/profile");
      console.log(res.data)
      return res.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (user, thunkAPI) => {
    try {
      const res = await axios.put('/api/Account/profile', user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);