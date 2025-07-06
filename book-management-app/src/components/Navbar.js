import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h2>Java Sample Approach</h2>
    <h4>Book Mangement Application</h4>
    <Link to="/">Dashboard</Link> | <Link to="/add">Add Book</Link>
    <hr />
  </div>
);

export default Navbar;
