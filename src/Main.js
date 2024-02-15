import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";
import App from "./App";
function Main() {
  return (
    <Routes>
      <Route path="/home/*" element={<App />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Main;
