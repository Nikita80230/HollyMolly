import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { productsReducer } from "./products/productsSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { userReducer } from "./user/userSlice";
import { ordersReducer } from "./orders/ordersSlice";

const productsPersistConfig = {
  key: "products",
  storage: storage,

  whitelist: ["favoriteProducts", "basketProducts"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken", "rememberMe"],
};

const persistedProductsReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    categories: categoriesReducer,
    products: persistedProductsReducer,
    filters: filtersReducer,
    user: userReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
