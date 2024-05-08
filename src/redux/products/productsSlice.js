import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductsByCurrentCategory,
  getRecommendedProducts,
} from "./operations";

const initialProductsState = {
  isLoading: false,
  isAllProductsLoading: false,
  isRecommendedProductsLoading: false,
  // productsByCurrentCategory: false,
  error: "",
  allProducts: [],
  recommendedProducts: [],
  favoriteProducts: [],
  productsByCurrentCategory: [],
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
      })
      .addCase(getProductsByCurrentCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCurrentCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsByCurrentCategory = action.payload;
      })
      .addCase(getProductsByCurrentCategory.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { toggleFavoriteProducts } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectRecommendedProducts = (state) =>
  state.products.recommendedProducts;
export const selectFavoriteProducts = (state) =>
  state.products.favoriteProducts;
export const selectProductsByCurrentCategory = (state) =>
  state.products.productsByCurrentCategory;

export const productsReducer = productsSlice.reducer;
