import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="Missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="Profile">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
