import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";
import "./styles.css";
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
