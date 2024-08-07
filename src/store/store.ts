import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWetherSliceReducer from "./slices/currentWetherSlice";

const rootReducer = combineReducers({
  currentWetherSliceReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

// Убрать оибку которая вылазит при коннекте с апи

// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: false,
//   }),
