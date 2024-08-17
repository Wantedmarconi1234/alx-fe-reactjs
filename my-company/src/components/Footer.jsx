// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

export default Footer;
