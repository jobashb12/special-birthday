import { useEffect, useRef, useState } from "react";
import Cake from "./images/cakegif.gif";
import Cat from "./images/cat.png";
import Happy from "./music/happy.mp3";
import "./App.css";

function App() {
  const musicRef = useRef();
  useEffect(() => {
    musicRef.current.currentTime = 4;
  }, []);

  useEffect(() => {
    let cat = document.querySelector(".card");
    cat.addEventListener("click", () => {
      musicRef.current.play();
    });
  }, []);

  return (
    <div className="main">
      <audio ref={musicRef} src={Happy} autoPlay={true} loop={true} />
      <div className="container">
        <img id="cat" src={Cat} />
        <div className="card">
          <div className="outside">
            <h1>Happy Birthday</h1>
            <h3>
              Dear friend, may god bless you with abundant joy on your birthday
              and your day be filled with laughter, love, and unforgettable
              moments. Here's to another year of adventures and dreams coming
              true.
            </h3>
          </div>
          <div className="inside">
            <img src={Cake} alt="cake" />
            <h3>
              Sending you an infinite amount of love, joy, and happiness on your
              birthday!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
