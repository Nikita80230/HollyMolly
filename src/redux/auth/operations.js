import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

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
      toast(
        "Щоб підтвердити реєстрацію, перейдіть за посиланням з поштової скриньки"
      );
      return res.data;
    } catch (error) {
      toast.error("Такий користувач вже існує");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/Account/login", credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error("Невірний логін чи пароль");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/api/Account/logoutAllDevices");

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
      const res = await axios.post(
        "/api/Account/refresh",
        {
          accessToken: state.auth.token,
          refreshToken: state.auth.refreshToken,
        }
      );
return res.data;
      console.log( res.data);

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
      toast.error("Потрібно авторизуватись");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
