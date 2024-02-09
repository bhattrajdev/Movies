import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Player } from "../components";
import { Home, MovieDetail, Login, PageNotFound, Register } from "../pages";
import AdminLayout from "../admin/AdminLayout";
import {
  Dashboard,
  ViewMovies,
  AddMovies,
  ViewUser,
  ViewBanner,
  AddBanner,
  AddUser,
} from "../admin/pages";

const RouterComponents = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Frontend User Routes */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="MovieDetail/:id" element={<MovieDetail />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />

            {/* Routes related to movies */}
            <Route path="movies">
              <Route path="view_movies" element={<ViewMovies />} />
              <Route path="add_movies" element={<AddMovies />} />
            </Route>

            {/* Routes related to banner */}
            <Route path="banner">
              <Route path="view_banner" element={<ViewBanner />} />
              <Route path="add_banner" element={<AddBanner />} />
            </Route>

            {/* Routes related to user */}
            <Route path="user">
              <Route path="view_user" element={<ViewUser />} />
              <Route path="add_user" element={<AddUser />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComponents;
