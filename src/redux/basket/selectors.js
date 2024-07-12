import { createSelector } from "@reduxjs/toolkit";

export const selectBasket = state => state.basket.basketProducts;
export const selectAmountOrder = state => state.basket.amountOrder;
