import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Positions from './components/Positions';
import PositionPage from './components/position/PositionPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Positions />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/positions/:id" element={<PositionPage />} />
          <Route path="/position/:id" element={<PositionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
