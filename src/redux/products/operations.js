import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const instance = axios.create({
  baseURL: "https://teamchallenge-001-site1.ktempurl.com/api/",
});

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("Products");
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getRecommendedProducts = createAsyncThunk(
  "products/getRecommendedProducts",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("Products/recommended");

      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getProductsByCurrentCategory = createAsyncThunk(
  "products/getRecommendedProducts",
  async (categoryGroupId, thunkApi) => {
    try {
      const { data } = await instance.get(
        `Categories/${categoryGroupId}/products`
      );
      console.log("getProductsByCurrentCategory-->", data);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
