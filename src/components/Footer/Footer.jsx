import React from "react";
import GhLogo from "./github logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <a href="https://github.com/Zevinos/App-project-frontend">
        <img src={GhLogo} className="GitLogo"></img>
      </a>
    </div>
  );
}

export default Footer;
