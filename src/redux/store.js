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

import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { productsReducer } from "./products/productsSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { userReducer } from "./user/userSlice";

const productsPersistConfig = {
  key: "products",
  storage:storage,

  whitelist: ["favoriteProducts"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken", "rememberMe"],
};

// const authPersistConfig = {
//   key: "auth",
//   storage: storageSession,
//   whitelist: ["token", "refreshToken"],
// };

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
