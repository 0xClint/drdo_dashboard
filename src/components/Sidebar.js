import React from "react";
import "./Sidebar.scss";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={require("../assets/drdo_logo.jpg")} width={70}></img>
        <div className="partition"></div>
        <div className="logo_2"></div>
      </div>
      <div className="sectionContainer">
        <Link to="/" className="sectionElement">
          <MdOutlineSpaceDashboard className="sectionIcon" /> Overview
        </Link>
        <Link to="/scrap" className="sectionElement">
          <TbBuildingSkyscraper className="sectionIcon" /> Track
        </Link>
        <li className="sectionElement">
          <MdOutlineSpaceDashboard className="sectionIcon" />
          Analyse
        </li>
        <li className="sectionElement">
          <MdOutlineSpaceDashboard className="sectionIcon" /> Element
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
