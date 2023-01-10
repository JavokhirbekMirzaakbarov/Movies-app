import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
