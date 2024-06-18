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
  basketProducts: [],
  amountOrder:0,
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

    addProductsToBasket: (state, action) => {
      
      const { productInstanceId, priceAfterDiscount } = action.payload;
      const currentProduct = state.basketProducts.find(
        (product) => product.productInstanceId === productInstanceId
      );
      if (currentProduct) {
        currentProduct.quantity += 1;
        currentProduct.totalPrice =
          currentProduct.quantity * priceAfterDiscount;
      } else {
        state.basketProducts.push({
          ...action.payload,
          quantity: 1,
          totalPrice: priceAfterDiscount,
        });
      }
    },

    deleteProduct: (state, action) => {
      const index = state.basketProducts.findIndex(
        (product) =>
          product.productInstanceId === action.payload.productInstanceId
      );

      if (index !== -1) {
        state.basketProducts.splice(index, 1);
      }
    },

    updateProduct: (state, action) => {
      const { productInstanceId, quantity } = action.payload;
      const currentProduct = state.basketProducts.find(
        (product) => product.productInstanceId === productInstanceId
      );
      if (currentProduct) {
        currentProduct.quantity = quantity;
        currentProduct.totalPrice =
          quantity * currentProduct.priceAfterDiscount;
      }
    },

     calculateAmountOrder: (state) => {
      state.amountOrder = state.basketProducts.reduce((sum, product) => {
        return sum + product.totalPrice;
      }, 0);
    },
     
    clearBasket: (state) => {
      state.basketProducts = [];
      state.amountOrder = 0;
     }
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

export const {
  toggleFavoriteProducts,
  addProductsToBasket,
  deleteProduct,
  updateProduct,
  calculateAmountOrder,
  clearBasket,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectRecommendedProducts = (state) =>
  state.products.recommendedProducts;
export const selectFavoriteProducts = (state) =>
  state.products.favoriteProducts;
export const selectProductsByCurrentCategory = (state) =>
  state.products.productsByCurrentCategory;
export const selectLoading = (state) => state.products.isLoading;
export const selectBasketProducts = (state) => state.products.basketProducts;
export const selectAmountOrder = (state) => state.products.amountOrder;

// export const selectSortedProducts = (state) => state.products.sortedProducts;

export const productsReducer = productsSlice.reducer;
