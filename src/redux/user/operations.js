import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getProfile= createAsyncThunk(
  "user/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/Account/profile");
    //   console.log( res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);