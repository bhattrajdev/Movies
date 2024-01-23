import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movie";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user:userReducer,
    
  },
  devTools: true,
});
