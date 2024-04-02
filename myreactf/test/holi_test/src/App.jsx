// src/App.js
import React from 'react';
import './App.css';
import WaterEffect from './WaterEffect';
import { motion } from 'framer-motion'

function WaterEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      style={{
        backgroundImage: "linear-gradient(to right, #00b09b 0%, #96cab5 50%, #00b09b 100%)",
        backgroundSize: "800% 100%",
        borderRadius: "10px",
        height: "20px",
        width: "100%",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          backgroundImage: "linear-gradient(to right, #96cab5 0%, #00b09b 50%, #96cab5 100%)",
          backgroundSize: "200% 100%",
          height: "100%",
          width: "80%",
          position: "absolute",
          left: "0%",
          top: "0%",
          animation: `wave 3s cubic-bezier(.8,.1,.2,1) infinite`,
          transformOrigin: "bottom",
        }}
      />
    </motion.div>
  )
}

function App() {
  return (
    <div className="App">
      <WaterEffect />
    </div>
  );
}


export default App;