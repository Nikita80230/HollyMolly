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
  filteredProducts: [],
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
    filterProducts: (state, action) => {
      state.filteredProducts = state.productsByCurrentCategory
        .filter((product) => {
          if (action.payload.priceRange.length === 0) return true;
          if (
            product.productsInstances[0].price >=
              action.payload?.priceRange[0] &&
            product.productsInstances[0].price <= action.payload?.priceRange[1]
          )
            return true;

          return false;
        })
        .filter((product) => {
          if (action.payload?.colors.length === 0) return true;
          if (
            action.payload?.colors.includes(product.productsInstances[0].color)
          )
            return true;

          return false;
        })
        .filter((product) => {
          if (action.payload?.materials?.length === 0) return true;
          if (
            action.payload?.materials.includes(
              product.productsInstances[0].material
            )
          )
            return true;

          return false;
        })
        .filter((product) => {
          if (action.payload?.sizes.length === 0) return true;
          if (action.payload?.sizes.includes(product.productsInstances[0].size))
            return true;

          return false;
        });
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
      });
  },
});

export const { toggleFavoriteProducts, filterProducts } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectRecommendedProducts = (state) =>
  state.products.recommendedProducts;
export const selectFavoriteProducts = (state) =>
  state.products.favoriteProducts;
export const selectProductsByCurrentCategory = (state) =>
  state.products.productsByCurrentCategory;
export const selectLoading = (state) => state.products.isLoading;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;

export const productsReducer = productsSlice.reducer;
