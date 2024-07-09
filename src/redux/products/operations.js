import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

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
  "products/getProductsByCurrentCategory",
  async ({ categoryGroupId, categoryId }, thunkApi) => {
    try {
      const { data } = await instance.get(
        categoryId
          ? `Categories/${categoryGroupId}/${categoryId}/products`
          : `Categories/${categoryGroupId}/products`
      );
      return data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId, thunkApi) => {
    try {
      const res = await instance.get(`Products/${productId}`);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
