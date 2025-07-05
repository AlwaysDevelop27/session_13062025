import React from 'react';
import { Link } from 'react-router-dom';



const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0 10px 0',
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'purple',
};

const linkStyle = {
  color: 'purple',
  textDecoration: 'underline',
  fontWeight: 'bold',
  fontSize: '22px',
  display: 'inline-block',
  minWidth: '120px',
  textAlign: 'center',
  lineHeight: '1.2',
};

const Navbar = () => (
  <nav style={navStyle}>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/" style={linkStyle}>Dashboard</Link>
      <Link to="/add" style={linkStyle}>Add<br/>Book</Link>
      <Link to="/help" style={linkStyle}>Help</Link>
    </div>
  </nav>
);

export default Navbar;
