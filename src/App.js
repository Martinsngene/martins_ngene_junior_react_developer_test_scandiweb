import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
