import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { rootReducer } from "./rootReducer";
import { NODE_ENV, TypeEnvironment, TypeSlices } from "../utils";

const persistConfig = {
  key: TypeSlices.Root,
  version: 1,
  storage,
  whitelist: [TypeSlices.Auth],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: NODE_ENV !== TypeEnvironment.Production,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
