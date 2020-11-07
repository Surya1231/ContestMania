import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ pathname }) => {
  return (
    <div className="navbar-container font-sm shadow" id="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark  px-4 ">
        <img src={`${process.env.PUBLIC_URL}/images/logos/logo.png`} className="mr-2" width="30" height="30" alt="" />
        <Link to="/" className="navbar-brand">
          CONTEST MANIA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">
                Codeforces
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/codechef' ? 'active' : ''}`} to="/codechef">
                CodeChef
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/problems' ? 'active' : ''}`} to="/problems">
                Problems
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/upcoming' ? 'active' : ''}`} to="/upcoming">
                Upcoming
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav py-0">
            <li className="nav-item navbar-text mr-2 py-0 ">
              <Link className={`nav-link ${pathname === '/news' ? 'active' : ''}`} to="/news">
                News
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
