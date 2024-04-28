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
import { categoriesReducer } from "./categories/categoriesSlice";
import { productsReducer } from "./products/productsSlice";

const productsPersistConfig = {
  key: "products",
  storage,

  whitelist: ["favoriteProducts"],
};

const persistedProductsReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: persistedProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
