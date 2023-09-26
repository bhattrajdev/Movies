import { configureStore } from "@reduxjs/toolkit";
import Moviereducer from './slices/Movie'

export const store = configureStore({
    reducer:{
        movie:Moviereducer
    },
    devTools:true
});
