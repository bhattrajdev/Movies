import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movie";
import userReducer from "./slices/user";
import bannerReducer from './slices/banner'
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user:userReducer,
    banner:bannerReducer,
  },
  devTools: true,
});
