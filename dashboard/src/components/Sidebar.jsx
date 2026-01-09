
import React, { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { BACKEND_URL } from "../utils/config.js";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    try {
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/user/admin/logout`,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const go = (path) => {
    navigate(path);
    setShow(false);
  };

  if (!isAuthenticated) return null;

  return (
    <>
      <aside className={show ? "sidebar open" : "sidebar"}>
        <h2 className="logo">MediStack</h2>

        <div className="menu">
          <div
            className={location.pathname === "/" ? "item active" : "item"}
            onClick={() => go("/")}
          >
            <TiHome />
            <span>Dashboard</span>
          </div>

          <div
            className={location.pathname === "/doctors" ? "item active" : "item"}
            onClick={() => go("/doctors")}
          >
            <FaUserDoctor />
            <span>Doctors</span>
          </div>

          <div
            className={
              location.pathname === "/admin/addnew" ? "item active" : "item"
            }
            onClick={() => go("/admin/addnew")}
          >
            <MdAddModerator />
            <span>Add Admin</span>
          </div>

          <div
            className={
              location.pathname === "/doctor/addnew" ? "item active" : "item"
            }
            onClick={() => go("/doctor/addnew")}
          >
            <IoPersonAddSharp />
            <span>Add Doctor</span>
          </div>

          <div
            className={
              location.pathname === "/messages" ? "item active" : "item"
            }
            onClick={() => go("/messages")}
          >
            <AiFillMessage />
            <span>Messages</span>
          </div>

          <div className="item logout" onClick={logout}>
            <RiLogoutBoxFill />
            <span>Logout</span>
          </div>
        </div>
      </aside>

      <div className="mobile-toggle">
        <GiHamburgerMenu onClick={() => setShow(!show)} />
      </div>
    </>
  );
};

export default Sidebar;
