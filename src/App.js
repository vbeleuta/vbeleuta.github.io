import React, { Component } from "react";
import portrait from "./portrait.jpg";
import "./App.css";

class App extends Component {
  render() {
    const getYearsOfExperience = () => {
      const careerStart = new Date("2015-07").getTime();
      const today = new Date().getTime();
      const diff = (today - careerStart) / (1000 * 3600 * 24);
      return Math.abs(Math.round(diff / 365.25));
    };
    return (
      <div className="container">
        <div className="right">
          <img
            src={portrait}
            className="portrait"
            alt="victoria_beleuta_portrait"
          />
        </div>
        <div className="left">
          <div className="about">
            <p>
              <div>Hello World...</div>
              <div>my name is Victoria Beleuta</div>
            </p>
            <p className="bold pink">
              Quality is not an excuse for procrastination. <br />
              Shipping is not an excuse for sloppy code.
            </p>
          </div>
          <div className="intro">
            <div>
              Software engineer with {getYearsOfExperience()} years of
              experience
            </div>
            <div>BSc in Computer Science from Jacobs University Bremen</div>
            <div>
              MSc in Innovation and Research in Informatics from UPC Barcelona
            </div>
            <div>
              Passionate about <span className="pink">Javascript</span>,{" "}
              <span className="pink">React</span> and{" "}
              <span className="pink">Web development</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
