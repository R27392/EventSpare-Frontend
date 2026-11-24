import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoriteSlice";
import filterReducer from "./slices/filterSlices"
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filters : filterReducer,
  },
});
