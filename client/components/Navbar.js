import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <div id="icon">
          <a href="/">
            <img id="logo" src="./assets/etc/twfav.png" />
          </a>
        </div>
        <div id="menu">
          <ol>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#works">Works</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ol>
          <a id="resume" href="./assets/etc/TonyWong-Resume.pdf">
            Resume
          </a>
        </div>
      </div>
    );
  }
}
