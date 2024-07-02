import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketProducts: [],
  },
  reducers: {
    addProductsToBasket: (state, action) => {
      const { productInstanceId, priceAfterDiscount, size, color, quantity } =
        action.payload;
      const currentProduct = state.basketProducts.find(
        (product) =>
          product.productInstanceId === productInstanceId &&
          product.size === size &&
          product.color === color
      );
      if (currentProduct) {
        currentProduct.quantity += quantity;
        currentProduct.totalPrice =
          currentProduct.quantity * priceAfterDiscount;
      } else {
        state.basketProducts.push({
          ...action.payload,
          quantity,
          totalPrice: quantity * priceAfterDiscount,
        });
      }
    },
  },
});

export const { addProductsToBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
