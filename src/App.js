import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Announcements from "./pages/Announcements";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h2>CS 1103 Hub</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/announcements">Announcements</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
