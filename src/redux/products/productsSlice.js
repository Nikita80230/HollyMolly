import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./operations";

const initialProductsState = {
  isLoading: false,
  allProducts: [],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: initialProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectAllProducts = (state) => state.products.allProducts;

export const productsReducer = productsSlice.reducer;
