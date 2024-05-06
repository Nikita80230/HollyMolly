import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getRecommendedProducts } from "./operations";

const initialProductsState = {
  isAllProductsLoading: false,
  isRecommendedProductsLoading: false,
  error: "",
  allProducts: [],
  recommendedProducts: [],
  favoriteProducts: [],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: initialProductsState,
  reducers: {
    toggleFavoriteProducts: (state, action) => {
      const isProductInFavorite = state.favoriteProducts.some(
        (favoriteProduct) => favoriteProduct.id === action.payload.id
      );

      if (!isProductInFavorite) state.favoriteProducts.push(action.payload);
      else {
        state.favoriteProducts = state.favoriteProducts.filter(
          (favoriteProduct) => favoriteProduct.id !== action.payload.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isAllProductsLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.isAllProductsLoading = false;
        state.error = "";
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isAllProductsLoading = false;
        state.error = action.payload;
      })
      .addCase(getRecommendedProducts.pending, (state) => {
        state.isRecommendedProductsLoading = true;
      })
      .addCase(getRecommendedProducts.fulfilled, (state, action) => {
        state.isRecommendedProductsLoading = false;
        state.recommendedProducts = action.payload;
        state.error = "";
      })
      .addCase(getRecommendedProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isAllProductsLoading = false;
      });
  },
});

export const { toggleFavoriteProducts } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectRecommendedProducts = (state) =>
  state.products.recommendedProducts;
export const selectFavoriteProducts = (state) =>
  state.products.favoriteProducts;

export const productsReducer = productsSlice.reducer;
