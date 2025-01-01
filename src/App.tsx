import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar & Footer/NavBar";
import Footer from "./Navbar & Footer/Footer";
import Home from "./Home page/Home";
import AboutUs from "./About us page/AboutUs";
import Events from "./Events page/Events";
import Social from "./Social page/Social";
import Membership from "./Membership page/Membership";
import Recruitment from "./Recruitment page/Recruitment";

function App() {
  return (
    <Router>
      <div
        className="min-vh-100 d-flex flex-column"
        style={{ backgroundColor: "black" }}
      >
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/social" element={<Social />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/recruitment" element={<Recruitment />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
