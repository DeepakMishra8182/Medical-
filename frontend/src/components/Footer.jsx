import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <hr className="footer-divider" />

        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/appointment">Appointment</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Working Hours</h4>
            <ul className="footer-hours">
              {hours.map((item) => (
                <li key={item.id}>
                  <span>{item.day} </span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div className="footer-contact">
              <MdEmail />
              <span>medistack@gmail.com</span>
            </div>
            <div className="footer-contact">
              <FaLocationArrow />
              <span>Kanpur, India</span>
            </div>
          </div>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} MediStackLab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
