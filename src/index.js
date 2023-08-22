import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutUs from './components/Pages/AboutUs';
import Services from './components/Pages/Services';
import ContactUs from './components/Pages/ContactUs';


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs /> } />      
    </Routes>
  </Router>
);

