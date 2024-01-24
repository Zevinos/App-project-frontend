import React from "react";
import "./NavBar.css";
import { HiMiniMoon, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import logo from "./../../assets/Images/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Bar">
      <Link to={`/`}>
        <img src={logo} alt="" className="Logo" />
      </Link>

      <div className="SearchBar">
        <HiOutlineMagnifyingGlass />
        <input type="text" name="" id="" />
      </div>
      <div>
        <HiMiniMoon />
      </div>
    </div>
  );
}
export default NavBar;
