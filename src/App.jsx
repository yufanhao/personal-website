import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Template from "./pages/Template";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const threshold = 10; // px of scroll required before toggling

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clamp scroll position to valid range to handle bounce scrolling
      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const clampedScrollY = Math.max(0, Math.min(currentScrollY, maxScrollY));

      const diff = clampedScrollY - lastScrollY.current;

      if (Math.abs(diff) < threshold) return; // ignore small scrolls

      if (diff > 0) {
        // scrolled down
        setShowNavbar(false);
      } else {
        // scrolled up
        setShowNavbar(true);
      }

      lastScrollY.current = clampedScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <nav
        className={`nav fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-md ${
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
