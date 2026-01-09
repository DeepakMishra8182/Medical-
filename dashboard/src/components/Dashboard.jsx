import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Dashboard.css";
import { BACKEND_URL } from "../utils/config";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated, admin } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
         `${BACKEND_URL}/api/v1/appointment/getall`,
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      const { data } = await axios.put(
        `${BACKEND_URL}/api/v1/appointment/update/${id}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status } : a))
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="content">
      <section className="dashboard-page">
        <div className="dashboard-header">
          <div className="welcome-card">
            <img src="/doc.png" alt="doctor" />
            <div>
              <p>Hello,</p>
              <h3>{admin && `${admin.firstName} ${admin.lastName}`}</h3>
              <span>
                Welcome to your medical dashboard. Manage appointments and doctors easily.
              </span>
            </div>
          </div>

          <div className="stats">
            <div className="stats-card">
              <p>Total Appointments</p>
              <h2>{appointments.length}</h2>
            </div>
            <div className="stats-card">
              <p>Registered Doctors</p>
              <h2>10</h2>
            </div>
          </div>
        </div>

        <div className="dashboard-table">
          <h3>Appointments</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Visited</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((a) => (
                    <tr key={a._id}>
                      <td>{a.firstName} {a.lastName}</td>
                      <td>{a.appointment_date.substring(0, 16)}</td>
                      <td>{a.doctor.firstName} {a.doctor.lastName}</td>
                      <td>{a.department}</td>
                      <td>
                        <select
                          value={a.status}
                          className={`status ${a.status.toLowerCase()}`}
                          onChange={(e) =>
                            handleUpdateStatus(a._id, e.target.value)
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td>
                        {a.hasVisited ? (
                          <GoCheckCircleFill className="visited yes" />
                        ) : (
                          <AiFillCloseCircle className="visited no" />
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No Appointments Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
