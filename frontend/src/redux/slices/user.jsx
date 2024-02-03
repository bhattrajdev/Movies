import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import api from "../../config/Api";
import {
  showSuccessToast,
  showErrorToast,
} from "../../pages/Errors/ToastError/ToastError";

// code for user login
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

// code to fetch user
export const fetchUser = createAsyncThunk("fetchuser", async (id) => {
  try {
    const response = await api.get(`user/${id}`);
    return response.data;
  } catch (error) {
    showErrorToast("Error !! Please try again");
    throw error;
  }
});

// code to fetch users
export const fetchUsers = createAsyncThunk("fetchusers", async (id) => {
  try {
    const response = await api.get(`user/`);
    return response.data;
  } catch (error) {
    showErrorToast("Error fetching users !! Please try again");
    throw error;
  }
});

// code to delete user
export const deleteUser = createAsyncThunk("deleteuser", async (id) => {
  try {
    console.log(id);
    const response = await api.delete(`/user/${id}`);
    if (response.status == 200) {
      showSuccessToast("User Deleted successfully");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    showErrorToast("Failed to Delete User");
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
      // for fetching single user
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
      })
      // for fetching users
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.shouldRedirect = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.shouldRedirect = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      // for deleting users
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.shouldRedirect = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.shouldRedirect = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default user.reducer;
