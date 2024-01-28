import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/Api";
import { showErrorToast,showSuccessToast} from "../../pages/Errors/ToastError/ToastError";

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

// to create a new movie
export const createMovie = createAsyncThunk("createMovie", async (data) => {
  try {
    const response = await api.post(`/movies`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if(response.status == 201){
      showSuccessToast('Movie upload successfully')
    }
    return response.data;
  } catch (error) {
    console.log(error)
   showErrorToast("Failed to upload movie");
  }
});

// to delete a movie
export  const deleteMovie = createAsyncThunk('deleteMovie',async(id)=>{
    try {
      console.log(id)
    const response = await api.delete(`/movies/${id}`);
    if(response.status == 200){
      showSuccessToast('Movie Deleted successfully')
    }
    return response.data;
  } catch (error) {
    console.log(error)
   showErrorToast("Failed to Delete movie");
  }

})
const movie = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: null,
    shouldRedirect: false,
  },
  extraReducers: (builder) => {
    builder
      // for multiple movies
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
         state.shouldRedirect = false;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
         state.shouldRedirect = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // for a single movie
      .addCase(fetchMovie.pending, (state) => {
        state.isLoading = true;
         state.shouldRedirect = false;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
         state.shouldRedirect = false;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // for a creating a movie
      .addCase(createMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          showSuccessToast('Movie created successfully')
          state.data = action.payload;
          state.shouldRedirect = true;
        }
      })

      .addCase(createMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        showErrorToast('Failed to create the movie')
      })

      // for a Deleting a movie
      .addCase(deleteMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default movie.reducer;
