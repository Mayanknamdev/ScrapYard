import React, { useState } from "react";
import Logo from "../assets/final_logo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const onLogOutClick = () => {
    window.localStorage.clear();

}


  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Admin </Link>
          <Link to="/user_login"> User </Link>
          <Link to="/"> LogOut </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link onClick={onLogOutClick} to="/login">
          {" "}
          Admin{" "}
        </Link>
        <Link onClick={onLogOutClick}  to="/user_login">
          {" "}
          User{" "}
        </Link>
        <Link to="/about"> About </Link>

        <Link onClick={onLogOutClick} to="/">
          {" "}
          LogOut{" "}
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
