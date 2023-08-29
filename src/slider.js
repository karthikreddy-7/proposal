import React, { useState } from "react";
import "./slider.css";
import notebook from "./img/notebook.jpg";
import summer from "./img/summer.jpg";
const Slider = () => {
  const [answer, setAnswer] = useState("yes");
  const [showButtons, setShowButtons] = useState(true);
  const handleAnswerChange = (newAnswer) => {
    console.log("answer changed");
    setAnswer(newAnswer);
    localStorage.setItem("answer", newAnswer);
    setShowButtons(false);
  };
  if (answer === "no") {
    return null; // If answer is "no", don't render anything
  }
  return (
    <div className="page-slider">
      <div className="section section1">
        <div class="cardy">
          <div class="cardy-inner">
            <div class="cardy-front">
              <img src={notebook} alt="Image Description" />
              <p>The Cause</p>
            </div>
            <div class="cardy-back">
              <p>
                Idk maybe I always had this feeling from the start, from the
                days where I used to wake you up to days of screen recording
                your dance videos with your sister where you always used to send
                me in view once.but those eyes &#128578;,they are indeed soooo
                pretty.Ah eyes ni chusthu bratikeyochu abba.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section2">
        <div class="cardl">
          <div class="cardl-image">
            <img class="cardl-image" src={summer} />
          </div>
          <div class="categoryl"> Dear SweetPotatie, </div>
          <div class="headingl">
            {" "}
            It's the imperfections that make things beautiful.Maybe I may not be
            the one for you but I'll sure try my level best to be that. Na
            persceptive nundi ayte imagine us building a start-up which you
            always thought off, imagine me caring you like a little baby and
            being a part and parcel of your happiness and sadness entire your
            life. I wish I could have given some boquets and chosen some
            traditional methods but anyways if everything goes good I gonna meet
            with a little rose flower tho. but ik anyways nothing is gonna
            happen even though I really love you to the moon and back.&#128153;
            <div class="authorl">
              {" "}
              By <span class="namel">Karthik </span> 1 day ago
            </div>
          </div>
        </div>
      </div>
      <div className="section section2">
        <button className="accept" onClick={() => handleAnswerChange("yes")}>
          Accept &#128150;
        </button>
        <button className="accept" onClick={() => handleAnswerChange("no")}>
          Reject &#128148;
        </button>
      </div>
    </div>
  );
};

export default Slider;
