import React from "react";
import { Routes, Route, Link } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

function App() {
  return (
    <div style={{ padding: "0px", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ marginBottom: "0px" }}>
        <Link to="/" style={{ marginRight: 0 }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: 0 }}>
          About
        </Link>
        <Link to="/product">Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
