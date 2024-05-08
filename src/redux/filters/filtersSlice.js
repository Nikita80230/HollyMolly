import { createSlice } from "@reduxjs/toolkit";
import {} from "./operations";

const initialFiltersState = {
  priceRage: [],
  colors: "",
  fabric: "",
  size: "",
};

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: initialFiltersState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { toggleFavoriteProducts } = filtersSlice.actions;

// export const selectAllProducts = (state) => state.products.allProducts;

export const productsReducer = filtersSlice.reducer;
