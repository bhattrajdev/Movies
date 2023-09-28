import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// to fetch all the movies
export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const response = await axios.get(`http://localhost:5000/movies`)
  return response.data;
});


// to fetch a single movie
export const fetchMovie = createAsyncThunk("fetchMovie",async(Id)=>{
  const response = await axios.get(`http://localhost:5000/movies/${Id}`)
  return response.data;
})

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
        console.log("Error fetching movies", action.error);
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
        console.log("Error fetching a single movie", action.error);
        state.isError = true;
      });
  },
});





export default movie.reducer;
