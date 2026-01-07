import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>
            Complete Hospital <br />
            Management & <span>Appointment System</span>
          </h1>

          <p className="hero-desc">
            MediStack is a digital hospital management platform designed to
            simplify patient care. Patients can easily book appointments,
            doctors can manage schedules, and hospitals can handle records
            efficiently in one secure system.
          </p>

          <p className="hero-desc">
            Our goal is to reduce waiting time, improve patient experience,
            and provide reliable healthcare access anytime.
          </p>

          <div className="hero-buttons">
            <Link to="/appointment" className="btn primary">
              Book Appointment
            </Link>
            <Link to="/about" className="btn outline">
              About Hospital
            </Link>
          </div>

          <div className="hero-numbers">
            <div>
              <h3>15+</h3>
              <span>Departments</span>
            </div>
            <div>
              <h3>50+</h3>
              <span>Doctors</span>
            </div>
            <div>
              <h3>12k+</h3>
              <span>Patients</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="info-card">
            <h4>Easy Appointment</h4>
            <p>
              Patients can book doctor appointments online without standing
              in long queues.
            </p>
          </div>

          <div className="info-card">
            <h4>Doctor Management</h4>
            <p>
              Doctors can manage availability, view appointments, and
              track patient details securely.
            </p>
          </div>

          <div className="info-card">
            <h4>24/7 Support</h4>
            <p>
              Our system ensures continuous support and smooth hospital
              operations anytime.
            </p>
          </div>

          <div className="info-card highlight">
            <h4>Secure Medical Records</h4>
            <p>
              All patient data is stored securely and accessed only by
              authorized staff.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
