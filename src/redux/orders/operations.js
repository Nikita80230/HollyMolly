import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyOrders = createAsyncThunk(
  "orders/getMyOrders",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/Orders/myOrders");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/Orders?sendEmail=true", credentials);
      return res.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
