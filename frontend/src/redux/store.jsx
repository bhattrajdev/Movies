import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movie";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  devTools: true,
});
