import React from "react";
import "./NavBar.css";
import { HiMiniMoon, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import logo from "./../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const { search, setSearch } = useState("");

  return (
    <div className="Bar">
      <Link to={`/`}>
        <img src={logo} alt="" className="Logo" />
      </Link>

      <div className="SearchBar">
        <HiOutlineMagnifyingGlass />

        <input
          type="text"
          name=""
          placeholder="Search a Game"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <Link to={`/new-game/`}>
          <p>New game</p>
        </Link>
      </div>
      <div>
        <Link to={`/favorite/`}>
          <p>Favorite</p>
        </Link>
      </div>
      <div>
        <Link to={`/about`}>
          <p>About</p>
        </Link>
      </div>
      <div>
        <HiMiniMoon />
      </div>
    </div>
  );
}
export default NavBar;
