import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/Categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
