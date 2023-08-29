import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./proposal.css"; // Import your CSS file for styling
import video from "./img/pexels.mp4";
import Slider from "./slider";

function Proposal() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const scrollToSection = (index) => {
    toggleNav();

    const target = document.querySelectorAll(".new-content section")[index];

    setTimeout(() => {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-background">
        <div className="content">{<Slider />}</div>
      </div>
    </div>
  );
}

export default Proposal;
