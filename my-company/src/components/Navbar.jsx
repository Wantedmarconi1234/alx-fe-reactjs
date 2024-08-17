// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/services" style={styles.link}>Services</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Navbar;
