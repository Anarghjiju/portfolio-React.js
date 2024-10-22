import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import './App.css'; // Import the CSS for global styling

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* NavBar will be consistent across all pages */}
      <NavBar />
      
      {/* Content area to render different pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      {/* Footer to appear at the bottom of every page */}
      <footer>
        <p>&copy; 2024 Anargh's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default App;
