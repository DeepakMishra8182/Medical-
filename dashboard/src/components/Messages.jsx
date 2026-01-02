import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import "./Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <section className="messages-page">
      <h1 className="page-title">Messages</h1>

      <div className="messages-grid">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div className="message-card" key={msg._id}>
              <div className="message-header">
                <h3>{msg.firstName} {msg.lastName}</h3>
                <span>{msg.phone}</span>
              </div>

              <p className="email">{msg.email}</p>

              <div className="message-body">
                <p>{msg.message}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No Messages Found</p>
        )}
      </div>
    </section>
  );
};

export default Messages;
