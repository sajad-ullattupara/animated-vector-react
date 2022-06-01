import React from "react";
import lottie from "lottie-web";
import learn from "./images/learn.json";
import rocket from "./images/rocket.json";
import ellipes from "./images/ellipes.json";
import "./App.css"

export default function App() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#rocket-animation"),

      animationData: rocket,
    });
  }, []);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#learn-animation"),
      animationData: learn,
    });
  }, []);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ellipes-animation"),
      animationData: ellipes,
    });
  }, []);

  return (
  <div class="container">
  <div class="row">
      <h1>React Vectorial Animation</h1>
      <div className="col" id="rocket-animation" style={{ width: 500, height: 500 }} />
      <div className="col" id="learn-animation" style={{ width: 500, height: 500 }} />
      <div  className="col" id="ellipes-animation" style={{ width: 500, height: 500 }} />
  </div>
  </div>
  );
}
