import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="travelers logo " />
      <h1>Space Rockets</h1>
    </div>
    <ul className="links">
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="Missions">Missions</Link>
      </li>
      <li>
        <Link to="Profile">Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
