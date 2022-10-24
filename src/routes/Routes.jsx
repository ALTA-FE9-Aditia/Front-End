import React from "react";
import { CiHome } from "react-icons/ci";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/App";
import Register from "../pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
