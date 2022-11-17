import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Challanges from "./views/Challanges";
import Forum from "./views/Forum";
import Home from "./views/Home";
import Profile from "./views/Profile";
import React from "react";
import { ScreenClassProvider } from "react-grid-system";

function App() {
  return (
    <ScreenClassProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/challanges" element={<Challanges />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ScreenClassProvider>
  );
}

export default App;
