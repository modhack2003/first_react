
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Features from './Features';
import Header from './Header';
import DarkModetoggle from './DarkModeToggle';


function App() {
  return (
      <Router>
        <Header/>
        <DarkModetoggle/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/features" element={<Features/>} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  