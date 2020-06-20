import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="main">
        <h1 className="header">
          I. <span>About Me</span>
        </h1>
        <div id="container">
          <div id="left">
            <p>
              Hello! I'm Tony, a software engineer based in NYC.
              <br />
              <br />
              I'm passionate about bringing creativity into design and problem
              solving. I enjoy building dynamic fullstack web and mobile
              applications that are beautiful and performant.
              <br />
              <br />
              Here are a few technologies I've been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
            </ul>
          </div>
          <div id="right"></div>
        </div>
      </div>
    );
  }
}
