import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchMovie = createAsyncThunk("fetchMovie", async () => {
  const response = await axios.get(`http://localhost:5000/movies`)
  return response.data;
});

const movie = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      console.log("Error",action.payload);
      state.isError = true;
    });
  },
});

export default movie.reducer;
