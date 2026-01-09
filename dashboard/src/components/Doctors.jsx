import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import "./Doctors.css";
import { BACKEND_URL } from "../utils/config";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/v1/user/doctors`,
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <section className="doctors-page">
      <h1 className="page-title">Doctors</h1>

      <div className="doctors-grid">
        {doctors.length > 0 ? (
          doctors.map((doc) => (
            <div className="doctor-card" key={doc._id}>
              <img
                src={doc.docAvatar?.url || "/doctor.png"}
                alt="doctor"
              />

              <h3>{doc.firstName} {doc.lastName}</h3>
              <p className="department">{doc.doctorDepartment}</p>

              <div className="doctor-info">
                <p>Email: <span>{doc.email}</span></p>
                <p>Phone: <span>{doc.phone}</span></p>
                <p>DOB: <span>{doc.dob.substring(0, 10)}</span></p>
                <p>Gender: <span>{doc.gender}</span></p>
                <p>Aadhaar: <span>{doc.aadhaar}</span></p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No Registered Doctors Found</p>
        )}
      </div>
    </section>
  );
};

export default Doctors;
