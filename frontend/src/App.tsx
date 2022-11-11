import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import Home from './views/Home';
import React from "react";

function App() {
  return (
<Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
</Router>
  );
}

export default App;
