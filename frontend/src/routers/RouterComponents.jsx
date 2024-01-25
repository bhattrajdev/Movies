import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Player } from "../components";
import { Home, MovieDetail, Login, PageNotFound, Register } from "../pages";
import AdminLayout from "../admin/AdminLayout";
import { Dashboard, ViewMovies, AddMovies, Users } from "../admin/pages";


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
            <Route index element={<Dashboard />} />
            <Route path="user" element={<Users />} />
            <Route path="movies" element={<ViewMovies />} />
            <Route path="add_movies" element={<AddMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComponents;
