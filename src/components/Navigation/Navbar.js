/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
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
