import React from "react";
import "./AboutFeatures.css";

const AboutFeatures = () => {
  return (
    <section className="about-features">
      <div className="about-features-container">

        <h2>How MediStack Works</h2>
        <p className="subtext">
          MediStack bridges the gap between patients, doctors, and administrators
          through a centralized and easy-to-use medical management system.
        </p>

        <div className="features-grid">
          <div className="feature-box">
            <h4>Patient Dashboard</h4>
            <p>
              Patients can log in, submit appointment requests, track appointment
              status, and send messages directly to the medical team.
            </p>
          </div>

          <div className="feature-box">
            <h4>Admin Dashboard</h4>
            <p>
              Administrators can manage doctors, add new admins, monitor patient
              appointments, and update appointment statuses in real time.
            </p>
          </div>

          <div className="feature-box">
            <h4>Doctor Management</h4>
            <p>
              Doctors are added by admins with complete profile details,
              department assignment, and availability information.
            </p>
          </div>

          <div className="feature-box">
            <h4>Appointment Status Control</h4>
            <p>
              Admins can accept, reject, or update appointment statuses, ensuring
              clear communication with patients.
            </p>
          </div>

          <div className="feature-box">
            <h4>Patient Messaging System</h4>
            <p>
              Patients can send queries or concerns directly through the platform,
              making communication faster and more transparent.
            </p>
          </div>

          <div className="feature-box">
            <h4>Modern Technology Stack</h4>
            <p>
              MediStack is built using MongoDB, Express, React, and Node.js to
              ensure scalability and future-ready performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
