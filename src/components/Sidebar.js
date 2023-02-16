import React from "react";
import "./Sidebar.scss";
import { MdOutlineSpaceDashboard, MdDeviceHub } from "react-icons/md";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { DiGoogleAnalytics } from "react-icons/di";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={require("../assets/drdo_logo.jpg")} width={70}></img>
        <div className="partition"></div>
        {/* <div className="logo_2"></div> */}
        <img
          src={require("../assets/linearAmptech logo.jpg")}
          width={110}
        ></img>
      </div>
      <div className="sectionContainer">
        <Link to="/" className="sectionElement">
          <MdOutlineSpaceDashboard className="sectionIcon" /> Dashboard
        </Link>
        <Link to="/location" className="sectionElement">
          <TbDeviceDesktopAnalytics className="sectionIcon" /> Location
          analytics
        </Link>
        <Link to="/realtimemap" className="sectionElement">
          <DiGoogleAnalytics className="sectionIcon" /> Realtime Map
        </Link>
        <Link to="/manage-device" className="sectionElement">
          <MdDeviceHub className="sectionIcon" /> Manage Device
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
