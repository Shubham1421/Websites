// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import Redirect from './components/Redirect';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/redirect/:target" element={<Redirect />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
