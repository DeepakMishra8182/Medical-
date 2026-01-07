import React from "react";
import "./AboutPlatform.css";

const AboutPlatform = () => {
  return (
    <section className="about-platform">
      <div className="about-platform-container">
        <span className="tag">About MediStack</span>

        <h1>A Smart Medical Appointment & Management System</h1>

        <p className="intro">
          MediStack Medical Institute is a modern healthcare management platform
          designed to simplify the appointment booking process for patients
          while providing powerful administrative tools for hospitals and clinics.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Patient-Centered Care</h3>
            <p>
              Patients can easily register, log in, and book appointments for
              themselves or their family members based on specific diseases.
            </p>
          </div>

          <div className="about-card">
            <h3>Doctor Selection by Disease</h3>
            <p>
              Our system intelligently allows patients to choose doctors
              according to their medical condition, ensuring accurate and
              effective treatment.
            </p>
          </div>

          <div className="about-card">
            <h3>Secure & Reliable Platform</h3>
            <p>
              Built using the MERN stack, MediStack ensures secure data handling,
              fast performance, and a smooth user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
