import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/api/Account/userInfo");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ user, profileId }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/Account/profiles/${profileId}`, user);
      return res.status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createProfile = createAsyncThunk(
  "user/createProfile",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/Account/profiles", credentials);

      return res.status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
