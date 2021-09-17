import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">PATRICK</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconsBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconsBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconsBag">2</span>
          </div>
          <img src="/assets/profile.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
