import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://teamchallenge-001-site1.ktempurl.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "/api/Account/registration?sendEmail=true",
        credentials
      );
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }, thunkAPI) => {
    try {
      const res = await axios.post("/api/Account/login", { email, password });
      setAuthHeader(res.data.token);
      return { ...res.data, rememberMe };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutAllDevices = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/api/Account/logoutAllDevices");

      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.post("/api/Account/refresh", {
        accessToken: state.auth.token,
        refreshToken: state.auth.refreshToken,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authGoogle = createAsyncThunk(
  "auth/loginGoogle",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/Account/login/google", credentials);

      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserEmail = createAsyncThunk(
  "auth/updateUserEmail",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.put("/api/Account/profile/email?sendEmail=true", {
        email: credentials.email,
      });
      
      return res.status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
