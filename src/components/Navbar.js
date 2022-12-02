import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Navbar = () => (
  <nav>
    <div className="nav-btn">
      <Link to="/" className="nav-link">
        <BiArrowBack />
      </Link>
    </div>
    <div className="logo">
      <span>COVID</span>
      Tracker
    </div>
  </nav>
);

export default Navbar;
