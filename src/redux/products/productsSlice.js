import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductById,
  getProductsByCurrentCategory,
  getRecommendedProducts,
} from "./operations";

const initialProductsState = {
  isLoading: false,
  isAllProductsLoading: false,
  isRecommendedProductsLoading: false,
  // productsByCurrentCategory: false,
  isCurrentProductLoading: false,
  error: "",
  currentProductError: null,
  allProducts: [],
  recommendedProducts: [],
  favoriteProducts: [],
  productsByCurrentCategory: [],
  filteredProducts: [],
  currentProduct: null,
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
        state.productsByCurrentCategory = action.payload.filter((item) => {
          return !item.name.toLowerCase().includes("Test".toLowerCase());
        });
        // state.productsByCurrentCategory = action.payload;
      })
      .addCase(getProductsByCurrentCategory.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.isCurrentProductLoading = true;
        state.currentProductError = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.isCurrentProductLoading = false;
        state.currentProductError = null;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isCurrentProductLoading = false;
        state.currentProductError = action.payload;
      });
  },
});

export const {
  toggleFavoriteProducts,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectRecommendedProducts = (state) =>
  state.products.recommendedProducts;
export const selectFavoriteProducts = (state) =>
  state.products.favoriteProducts;
export const selectProductsByCurrentCategory = (state) =>
  state.products.productsByCurrentCategory;
export const selectLoading = (state) => state.products.isLoading;
export const selectCurrentProduct = (state) => state.products.currentProduct;
export const selectCurrentLoading = (state) =>
  state.products.isCurrentProductLoading;


// export const selectSortedProducts = (state) => state.products.sortedProducts;

export const productsReducer = productsSlice.reducer;
