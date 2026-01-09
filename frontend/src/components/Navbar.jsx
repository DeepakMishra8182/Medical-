import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import './Navbar.css'
import { BACKEND_URL } from "../utils/config";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/user/patient/logout`,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <div className="navbar-logo">
          <h1>MediStack</h1>
        </div>
        <ul className={`navbar-links ${open ? "show" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              Appointment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
          </li>

          <li className="auth-btn">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="login-btn"
              >
                Login
              </button>
            )}
          </li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
