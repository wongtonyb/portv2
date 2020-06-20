import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="main">
        <h1>Other Noteworthy Projects</h1>
        <div id="projects-container">
          <div className="sub">
            <div className="deco">
              <i className="far fa-folder-open fa-4x"></i>
              <ul className="icons">
                <li>
                  <a href="https://github.com/wongtonyb/rectangles">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h1>Rectangles</h1>
            <p>
              A simple interactive web app to help compare relationship of two
              rectangles on a canvas based on intersections, containment, and
              adjacency
            </p>
            <ul className="stack">
              <li>JavaScript</li>
              <li>React</li>
              <li>Konva.js</li>
              <li>Mocha & Chai</li>
            </ul>
          </div>
          <div className="sub">
            <div className="deco">
              <i className="far fa-folder-open fa-4x"></i>
              <ul className="icons">
                <li>
                  <a href="https://github.com/One-Team-One-Dream-OTOD/Grace-Shopper">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="http://rainforest-grace-shopper.herokuapp.com/">
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h1>Rainforest</h1>
            <p>
              A mock e-commerce website dedicated to selling books. Full
              functioning account management, checkout, and continuous
              integration features
            </p>
            <ul className="stack">
              <li>Node.js</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Stripe API</li>
              <li>Google OAuth</li>
              <li>Travis CI</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className="sub">
            <div className="deco">
              <i className="far fa-folder-open fa-4x"></i>
              <ul className="icons">
                <li>
                  <a href="https://github.com/wongtonyb/Stackathon-Facial-Recognition">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h1>Smile</h1>
            <p>
              A mobile app with simple facial detection and filter application
              features. It tracks facial features and expressions and applies
              filters based on conditions
            </p>
            <ul className="stack">
              <li>React-Native</li>
              <li>Expo</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
