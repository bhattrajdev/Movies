import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar,Player } from "./components";
import { Home, MovieDetail,Login } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="*" element="page not found"/>
          <Route index element={<Home />} />
          <Route path="MovieDetail/:id" element={<MovieDetail />} />
          <Route path="/player/:id" element={<Player />} />
        </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routes