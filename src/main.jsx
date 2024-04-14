import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./(Routes)/View.jsx";
import { Toaster } from 'sonner'
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/*" element={<View />}></Route>
      <Route path="/edit" element={<App />} />
    </Routes>
    <Toaster position="bottom-right"/>
  </BrowserRouter>
);
