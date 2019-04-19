import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import ToggleButton from '../ToggleButton'

const Navbar = () => (
  <nav className="navbar">
    <img className="logo" src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" alt="" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/details">Details</Link></li>
        <ToggleButton />
      </ul>
  </nav>
);

export default Navbar;
