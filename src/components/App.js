import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import '../styles/App.css';
import Navbar from './NavBar';  
import IntroPage from "./IntroPage"; 


function App() {
  // Get the current location
  const location = useLocation();
  
  // Conditional rendering of Navbar: Hide it on Landing Page
  const shouldRenderNavbar = location.pathname !== '/'; // Only render navbar if not on landing page

  return (
    <div className="App">
      {shouldRenderNavbar && <Navbar />} {/* Render Navbar only if not on Landing Page */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </div>
  );
}

export default App;
