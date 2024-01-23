import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/Api";
import { showErrorToast,showSuccessToast } from "../../pages/Errors/ToastError/ToastError";

// to fetch all the movies
export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  try {
    const response = await api.get(`/movies`);
    return response.data;
  } catch (error) {
    showErrorToast("Error fetching movies");
    throw error;
  }
});

// to fetch a single movie
export const fetchMovie = createAsyncThunk("fetchMovie", async (id) => {
  try {
    const response = await api.get(`movies/${id}`);
    return response.data;
  } catch (error) {
    showErrorToast("Error !! Please try again");
    throw error;
  }
});

const movie = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      // for multiple movies
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // for a single movie
      .addCase(fetchMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default movie.reducer;
