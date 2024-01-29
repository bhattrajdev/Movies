import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/Api";
import {
  showErrorToast,
  showSuccessToast,
} from "../../pages/Errors/ToastError/ToastError";

// to fetch all the banner
export const fetchBanners = createAsyncThunk("fetchBanners", async () => {
  try {
    const response = await api.get(`/banner`);
    return response.data;
  } catch (error) {
    showErrorToast("Error fetching banner");
    throw error;
  }
});

// to fetch a single movie
export const fetchBanner = createAsyncThunk("fetchBanner", async (id) => {
  try {
    const response = await api.get(`banner/${id}`);
    return response.data;
  } catch (error) {
    showErrorToast("Error !! Please try again");
    throw error;
  }
});

// to create a new banner
export const createBanner = createAsyncThunk("createBanner", async (data) => {
  try {
    const response = await api.post(`/banner`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status == 201) {
      showSuccessToast("Banner upload successfully");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    showErrorToast("Failed to upload Banner");
  }
});

// to delete a banner
export const deleteBanner = createAsyncThunk("deleteBanner", async (id) => {
  try {
    console.log(id);
    const response = await api.delete(`/banner/${id}`);
    if (response.status == 200) {
      showSuccessToast("Banner Deleted successfully");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    showErrorToast("Failed to Delete Banner");
  }
});

const banner = createSlice({
  name: "banner",
  initialState: {
    isLoading: false,
    data: null,
    shouldRedirect: false,
  },
  extraReducers: (builder) => {
    builder
      // for multiple banner
      .addCase(fetchBanners.pending, (state) => {
        state.isLoading = true;
        state.shouldRedirect = false;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.shouldRedirect = false;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // for a single movie
      .addCase(fetchBanner.pending, (state) => {
        state.isLoading = true;
        state.shouldRedirect = false;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.shouldRedirect = false;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // for a creating a movie
      .addCase(createBanner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          showSuccessToast("Movie created successfully");
          state.data = action.payload;
          state.shouldRedirect = true;
        }
      })

      .addCase(createBanner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        showErrorToast("Failed to create the movie");
      })

      // for a Deleting a movie
      .addCase(deleteBanner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(deleteBanner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default banner.reducer;
