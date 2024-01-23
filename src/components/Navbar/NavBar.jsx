
import React from "react";
import './NavBar.css';
import {HiMiniMoon, HiOutlineMagnifyingGlass} from "react-icons/hi2";

function NavBar(){
return(
    <div className="Bar">
        <img src="/App-project-frontend/src/assets/Images/logo.png" alt="" className="Logo" />
<div className="SearchBar">
    <HiOutlineMagnifyingGlass/>
    <input type="text" name="" id="" />
</div>
<div>
    <HiMiniMoon/>
     </div>

    </div>
);
}
export default NavBar;
