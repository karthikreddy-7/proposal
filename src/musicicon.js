// Musicicon.js
import React, { useState } from "react";
import icon from "./img/icon.png";
import "./musicicon.css";
import Music from "./music";

function Musicicon() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <img
        src={icon}
        alt="Icon"
        className="icon"
        onClick={() => togglePopup()}
      />
      <div className={`icon-container ${isPopupOpen ? "visible" : ""}`}>
        <Music />
      </div>
    </>
  );
}

export default Musicicon;
