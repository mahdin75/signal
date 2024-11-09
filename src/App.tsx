import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./app/Home";
import Settings from "./app/Settings";
import Login from "./app/Login";
import Register from "./app/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
