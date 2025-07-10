import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Template from "./pages/Template";

import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <nav
        className={`nav fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/template">Template</Link>
      </nav>

      <div className="pt-20">
        {" "}
        {/* to push content below the nav */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/template" element={<Template />} />
          <Route path="/template" element={<Template />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
