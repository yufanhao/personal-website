// import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Template from "./pages/Template";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/template">Template</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
