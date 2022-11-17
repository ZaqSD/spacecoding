import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from './views/Home';
import Home from "./views/Home";
import React from "react";
import { ScreenClassProvider } from "react-grid-system";

function App() {
  return (
    <ScreenClassProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ScreenClassProvider>
  );
}

export default App;
