import React, { useState, useEffect } from "react";
import "./App.css";
function Rejection() {
  const [answer, setAnswer] = useState("yes");
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const storedAnswer = localStorage.getItem("answer");
    if (storedAnswer) {
      setAnswer(storedAnswer);
    }
  }, []);

  const handleAnswerChange = (newAnswer) => {
    setAnswer(newAnswer);
    localStorage.setItem("answer", newAnswer);
    setShowButtons(false);
  };

  const BlankComponent = () => {
    return <div>Your application is now blank.</div>;
  };

  return (
    <div className="">
      <p>Welcome to my React App!</p>
      {showButtons && (
        <div className={`button-container`}>
          <button onClick={() => handleAnswerChange("yes")}>
            Set Answer to Yes
          </button>
          <button onClick={() => handleAnswerChange("no")}>
            Set Answer to No
          </button>
        </div>
      )}
      {answer === "yes" ? <p>Your application is active.</p> : null}
      {answer === "no" ? <BlankComponent /> : null}
    </div>
  );
}

export default Rejection;
