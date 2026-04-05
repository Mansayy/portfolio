import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import Navbar from './NavBar';  
import IntroPage from "./IntroPage"; 
import ProjectPage from './ProjectPage';
import Timeline from './Timeline'; 
import ScrollToTop from './ScrollBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';


function App() {
  const location = useLocation();
  const shouldRenderNavbar = location.pathname !== '/'; 

  return (
    <div className={`App${shouldRenderNavbar ? ' App--with-nav' : ''}`}>
      {shouldRenderNavbar && <Navbar />}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/timeline" element={<Timeline />} /> 
      </Routes>

      {shouldRenderNavbar && (
        <>
          <AboutPage/>
          <ProjectPage/>
          <Timeline/>
        </>
      )}

    </div>
  );
}

export default App;
