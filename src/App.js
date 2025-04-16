import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import TurfList from "./TurfList";
import Register from "./Register";
import Bookings from "./Bookings";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/turfs" element={<TurfList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
