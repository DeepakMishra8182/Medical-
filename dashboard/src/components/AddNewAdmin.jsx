import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./AddNewAdmin.css";
import { BACKEND_URL } from "../utils/config.js";

const AddNewAdmin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/v1/user/admin/addnew`,
        { firstName, lastName, email, phone, aadhaar, dob, gender, password },
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <section className="admin-page">
      <div className="admin-form-card">
        <h1 className="admin-logo">MediStack</h1>
        <h2>Add New Admin</h2>

        <form onSubmit={handleAddNewAdmin}>
          <div className="row">
            <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="row">
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="row">
            <input placeholder="Aadhaar" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>

          <div className="row">
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit">Create Admin</button>
        </form>
      </div>
    </section>
  );
};

export default AddNewAdmin;

