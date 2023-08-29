import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Rejection from "./rejection";
import Start from "./start";
import Proposal from "./proposal";
import background from "./img/startimg.jpg";
import Musicicon from "./musicicon";

function App() {
  const [showButton, setShowButton] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [authQuestion, setAuthQuestion] = useState("password?");
  const [authAnswer, setAuthAnswer] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  localStorage.setItem("answer", "yes");
  const [answer, setAnswer] = useState(localStorage.getItem("answer") || "yes");
  if (answer == "no") {
    console.log("the answer is no!");
  }
  const handleStartButtonClick = () => {
    if (authAnswer === "mysweetlittlepandi") {
      // Replace "YourAnswerHere" with the actual answer
      setShowButton(false);
      setIsAuthenticated(true);
      setShowCard(true);
    } else {
      alert("Incorrect answer. Try again.");
    }
  };

  const redirectToStart = () => {
    window.history.pushState(null, "", "/start");
    window.dispatchEvent(new Event("popstate"));
    setShowButton(false);
    setShowCard(false);
  };

  return (
    <>
      {answer === "yes" && (
        <>
          <Musicicon />
          <Router>
            <div className="app-container">
              <div className="background-image"></div>
              <div className="pre-start">
                <Routes>
                  {isAuthenticated && (
                    <>
                      <Route path="/start" element={<Start />} />
                      <Route path="/propose" element={<Proposal />} />
                      <Route path="/rejection" element={<Rejection />} />
                    </>
                  )}
                </Routes>
                {showButton && !isAuthenticated && !showCard && (
                  <>
                    <div class="page">
                      <div class="margin"></div>
                      <p>Authentication</p>
                      <div className="auth-container">
                        <p className="auth-question">{authQuestion}</p>
                        <input
                          type="text"
                          value={authAnswer}
                          onChange={(e) => setAuthAnswer(e.target.value)}
                          className="auth-input"
                        />
                        <button
                          className="auth-button empty"
                          onClick={handleStartButtonClick}
                        >
                          Authenticate
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {!showButton && isAuthenticated && showCard && (
                  <>
                    <div className="card">
                      <div className="content">
                        <p className="heading">
                          The moon is beautiful, isn't it?
                        </p>
                        <p className="para">
                          In moments big and moments small, we can be the one
                          who can go through it all. A bond that can be grown,
                          deep and true, This card is a piece of my heart for
                          you."
                        </p>
                      </div>
                    </div>
                    <div className="navigation-button">
                      <Link to="/start" onClick={redirectToStart}>
                        <button> S T A R T</button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
