
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Features from './Features';
import Header from './Header';
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic here if needed
    updateTheme(isDarkMode);
  };

  const updateTheme = (isDarkMode) => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('background-color', '#1f1f1f');
      root.style.setProperty('text-color', '#ffffff');
    } else {
      root.style.setProperty('background-color', '#ffffff');
      root.style.setProperty('text-color', '#000000');
    }
  };

  return (
      <Router>
        <Header/>
        <DarkModeToggle/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/features" element={<Features/>} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
  