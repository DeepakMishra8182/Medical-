import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './MessageForm.css'
import { useContext } from "react";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const {isAuthenticated} =useContext(Context)
  const navigateTo= useNavigate()

  const handleMessage = async (e) => {
    e.preventDefault();
    
    if(!isAuthenticated){
      toast.error("Please login first!");
      navigateTo('/login')
      return;
    }


    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <section className="message-section">
      <div className="message-wrapper">
        <div className="message-info">
          <h2>Get In Touch With MediStack</h2>
          <p>
            Have questions about appointments, doctors, or medical services?
            Our support team is always ready to help you.
          </p>

          <div className="info-box">
            <h4>📞 Phone Support</h4>
            <span>+91 99 9999 9999</span>
          </div>

          <div className="info-box">
            <h4>📧 Email Address</h4>
            <span>support@MediStack.com</span>
          </div>

          <div className="info-box">
            <h4>🏥 Hospital Hours</h4>
            <span>Mon – Sun : 24/7 Open</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="message-form">
          <h3>Send Us A Message</h3>

          <form onSubmit={handleMessage}>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <textarea
              rows="6"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default MessageForm;
