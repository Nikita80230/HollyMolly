import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const getMyOrders = createAsyncThunk(
  "orders/getMyOrders",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/Orders/myOrders");

      console.log(res.data);
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
//  toast.success("Замовлення успішно створено");
      console.log(res.data);
      return res.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      // toast.error("Не вдалося створити замовлення.");
    }
  }
);
