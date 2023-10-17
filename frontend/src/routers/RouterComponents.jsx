import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Player } from "../components";
import { Home, MovieDetail, Login, PageNotFound, Register } from "../pages";

const RouterComponents = () => {
  return (
    <>
     {/* // for frontend user */} 
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="*" element={<PageNotFound/>} />
            <Route index element={<Home />} />
            <Route path="MovieDetail/:id" element={<MovieDetail />} />
            <Route path="/player/:id" element={<Player />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      
      {/* for Admin panel */} 
     
    </>
  );
};

export default RouterComponents;
