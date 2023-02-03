import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import { RiNotification3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { isSidebar, isNavbar, isAdmin, setIsAdmin, setIsSidebar } =
    useStateContext();
  return (
    <div className="navbar">
      <div className="navLeft">
        <GiHamburgerMenu
          className="hambBurgerIcon"
          onClick={() => setIsSidebar(!isSidebar)}
        />
        <input type="text" placeholder="search" className="searchbar" />
      </div>
      <div className="navRight">
        <RiNotification3Line id="notiIcon" />
        <div className="user">
          <FaRegUserCircle id="userIcon" />
          {/* {"Hi, Omkar"} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
