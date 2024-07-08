import { createSelector } from "@reduxjs/toolkit";

export const selectBasket = state => state.basket.basketProducts;
