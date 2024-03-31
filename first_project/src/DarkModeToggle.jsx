import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons from react-icons library

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      style={{
        borderRadius: '50%', // Makes the button round
        padding: '10px',
        backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isDarkMode ? <FaMoon /> : <FaSun />} {/* Conditionally render sun or moon icon based on mode */}
    </button>
  );
}

export default DarkModeToggle;