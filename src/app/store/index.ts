import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "entities/session";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [sessionSlice.name],
};

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    rootReducer
  ) as unknown as typeof rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
