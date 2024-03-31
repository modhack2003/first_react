import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header style={{border: "5px solid yellow",borderRadius: "10px"}}>
      <nav style={{ display: 'block',  alignItems: 'center' , fontSize:"20px" }}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>
          Home
        </Link>
        <Link to="/features" style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>
          Features
        </Link>
        <Link to="/about" style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>
          About
        </Link>
        <Link to="/contact" style={{ color: 'black', textDecoration: 'none' }}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function Header() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark" sticky = "top">
//         <Container>
//           <Navbar.Brand href="#home">Naruto</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#About">About</Nav.Link>
//             <Nav.Link href="#Create">Create</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
