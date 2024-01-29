import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import api from "../../config/Api";
import {
  showSuccessToast,
  showErrorToast,
} from "../../pages/Errors/ToastError/ToastError";

export const userLogin = createAsyncThunk("userLogin", async (data) => {
  try {
    const response = await api.post(`/user/login`, {
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("id", response.data._id);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchUser = createAsyncThunk("fetchuser", async (id) => {
  try {
    const response = await api.get(`user/${id}`);
    return response.data;
  } catch (error) {
    showErrorToast("Error !! Please try again");
    throw error;
  }
});

const user = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
    shouldRedirect: false,
  },
  extraReducers: (builder) => {
    builder
      // for userlogin
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        showSuccessToast("Login successful");
        state.data = action.payload;
        state.shouldRedirect = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        showErrorToast("Invalid Credentials !!!");
      })
      // for a single user
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.shouldRedirect = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.shouldRedirect = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default user.reducer;
