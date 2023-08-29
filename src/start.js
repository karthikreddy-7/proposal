import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./start.css";
import Music from "./music";
import Musicicon from "./musicicon";
import after from "./img/poststart.jpg";
import Loader from "./loader";
function Start() {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false); // State to control the loader

  const handleButtonClick = () => {
    setShowLoader(true); // Show the loader
    setTimeout(() => {
      setShowLoader(false); // Hide the loader after 2-3 seconds
      navigate("/proposal"); // Navigate to the proposal
    }, Math.floor(Math.random() * 1000) + 2000); // Random duration between 2000ms and 3000ms
  };

  return (
    <>
      {!showLoader ? (
        <div className="scard">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <image
              x="0"
              y="0"
              width="24"
              height="24"
              href={after} // Use the imported image as the source
            />
          </svg>
          <div className="card__content">
            <p className="card__title">hoi SweetPotatie</p>
            <p className="card__description">
              I know this would be an unexpected thing to you rn,but this is the
              thing which going all over my head since a week.As Prateek Kuhad
              said "Nothing says I love you like your eyes &#10084;.",maybe it's
              the eyes that I have fallen for like an unspoken understanding
              that words often struggle to define.I can guess that this is going
              to be a 100 percent rejection,but I can promise you that I'm gonna
              teach the hindi you need to learn (haha).
            </p>
            <div className="gap"></div>
            <p className="card__description" style={{ marginLeft: "60px" }}>
              As you said that "Nannu kuda avar ayna akkvuga flirt cheste
              padipota ani", So Konni flirt
            </p>
            <p className="card__description">
              lines pedudm anukunna but can't find any flirt line that could fit
              you. As this is just an introduction page, I don't want to drag
              this more but let me raise a toast to the girl i love the most
              darla &#128149;.
            </p>
            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
            <div className="book">
              <button className="end-button" onClick={handleButtonClick}>
                {" "}
                Pick up!
              </button>
              <div className="cover">
                <p>A Little Something for You</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Start;
