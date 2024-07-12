import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketProducts: [],
    amountOrder: 0,
  },
  reducers: {
    addProductsToBasket: (state, action) => {
      const {
        productId,
        productName,
        productImage,
        productInstanceId,
        priceAfterDiscount,
        size,
        color,
        quantity,
        stockQuantity,
      } = action.payload;

         const currentProductIndex = state.basketProducts.findIndex(
        (product) =>
          product.productId === productId &&
          product.size === size &&
          product.color === color &&
          product.productInstanceId === productInstanceId
      );

      if (currentProductIndex !== -1) {
        const newQuantity = state.basketProducts[currentProductIndex].quantity + quantity;
        if (newQuantity > stockQuantity) {
          state.basketProducts[currentProductIndex].quantity = stockQuantity;
        } else {
          state.basketProducts[currentProductIndex].quantity = newQuantity;
        }
        state.basketProducts[currentProductIndex].totalPrice =
          state.basketProducts[currentProductIndex].quantity * priceAfterDiscount;
      } else {
        state.basketProducts.push({
          productId,
          productName,
          productImage,
          productInstanceId,
          priceAfterDiscount,
          size,
          color,
          quantity: quantity > stockQuantity ? stockQuantity : quantity,
          stockQuantity,
          totalPrice: (quantity > stockQuantity ? stockQuantity : quantity) * priceAfterDiscount,
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
        currentProduct.totalPrice = quantity * currentProduct.priceAfterDiscount;
      }
    },
       calculateAmountOrder: (state) => {
      state.amountOrder = state.basketProducts.reduce((sum, product) => {
        return sum + product.totalPrice;
      }, 0);
    },
    clearBasket: (state) => {
      state.basketProducts = [];
    },
  },
});

export const { addProductsToBasket, deleteProduct, updateProduct, calculateAmountOrder, clearBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;