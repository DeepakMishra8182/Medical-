import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
import "./AddNewDoctor.css";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState(null);
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("aadhaar", aadhaar);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);

      const { data } = await axios.post(
        `https://hospitalmanagement-mocha.vercel.app/api/v1/user/doctor/addnew`,
        formData,
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
    <section className="doctor-page">
      <div className="doctor-card">
        <h1 className="doctor-logo">MediStack</h1>
        <h2>Register New Doctor</h2>

        <form onSubmit={handleAddNewDoctor}>
          <div className="doctor-grid">
            <div className="avatar-box">
              <img
                src={docAvatarPreview || "/docHolder.jpg"}
                alt="doctor"
              />
              <input type="file" onChange={handleAvatar} />
            </div>

            <div className="form-grid">
              <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input placeholder="Aadhaar" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <select value={doctorDepartment} onChange={(e) => setDoctorDepartment(e.target.value)}>
                <option value="">Select Department</option>
                {departmentsArray.map((dep, i) => (
                  <option key={i} value={dep}>{dep}</option>
                ))}
              </select>

              <button type="submit">Register Doctor</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;
