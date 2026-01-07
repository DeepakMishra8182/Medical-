import React from "react";
import "./AppointmentHeader.css";

const AppointmentHeader = () => {
  return (
    <section className="appointment-header">
      <div className="appointment-header-container">

        {/* LEFT CONTENT */}
        <div className="appointment-left">
          <span className="tag">Online Appointment</span>
          <h1>Book Your Medical Appointment Easily</h1>

          <p className="subtitle">
            Get professional medical consultation from experienced doctors.
            We provide quality healthcare services with modern facilities.
          </p>

          <div className="features">
            <div className="feature-box">
              <h4>Qualified Doctors</h4>
              <p>Certified and experienced doctors across multiple departments.</p>
            </div>

            <div className="feature-box">
              <h4>Advanced Equipment</h4>
              <p>Modern medical technology for accurate diagnosis.</p>
            </div>

            <div className="feature-box">
              <h4>Fast Service</h4>
              <p>Quick appointment scheduling with minimal waiting time.</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="appointment-right">
          <h3>Why Choose ZeeCare?</h3>

          <ul className="benefits">
            <li>✔ 24/7 Appointment Support</li>
            <li>✔ Trusted by 10,000+ Patients</li>
            <li>✔ Safe & Secure Data</li>
            <li>✔ Multiple Medical Departments</li>
          </ul>

          <div className="stats">
            <div className="stat-box">
              <h2>15+</h2>
              <p>Departments</p>
            </div>

            <div className="stat-box">
              <h2>50+</h2>
              <p>Doctors</p>
            </div>

            <div className="stat-box">
              <h2>10k+</h2>
              <p>Happy Patients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppointmentHeader;
