import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [doctors, setDoctors] = useState([]);

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

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          aadhaar,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAadhaar("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2 className="form-title">Book Appointment</h2>

        <form onSubmit={handleAppointment} className="appointment-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Aadhaar Number" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>

          <div className="form-row">
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="date" placeholder="Appointment Date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
          </div>

          <div className="form-row">
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentsArray.map((dep, i) => (
                <option key={i} value={dep}>
                  {dep}
                </option>
              ))}
            </select>

            <select
              value={JSON.stringify({ firstName: doctorFirstName, lastName: doctorLastName })}
              onChange={(e) => {
                const { firstName, lastName } = JSON.parse(e.target.value);
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doc) => doc.doctorDepartment === department)
                .map((doc, i) => (
                  <option key={i} value={JSON.stringify({ firstName: doc.firstName, lastName: doc.lastName })}>
                    {doc.firstName} {doc.lastName}
                  </option>
                ))}
            </select>
          </div>

          <textarea placeholder="Address" rows="4" value={address} onChange={(e) => setAddress(e.target.value)} />

          <div className="checkbox-row">
            <label>Have you visited before?</label>
            <input type="checkbox" checked={hasVisited} onChange={(e) => setHasVisited(e.target.checked)} />
          </div>

          <button type="submit" className="submit-btn">
            Get Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
