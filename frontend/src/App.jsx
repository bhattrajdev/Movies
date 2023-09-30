import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar,Player } from "./components";
import { Home, MovieDetail } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="*" element="page not found"/>
          <Route index element={<Home />} />
          <Route path="MovieDetail/:id" element={<MovieDetail />} />
          <Route path="/player/:id" element={<Player />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
