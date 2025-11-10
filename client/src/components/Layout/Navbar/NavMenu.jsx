import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Correct import

const NavMenu = () => {
  const [user, setUser] = useState(true); // ✅ Added useState import

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Book Appointment Button */}
            <form className="d-flex me-3" role="search">
              <button className="btn btn-outline-success" type="button">
                Book Appointment
              </button>
            </form>

            {/* Login / User Account */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/profile">
                    My Account
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
