import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="menubar">
          <h3>MENU</h3>
          <i className="fas fa-bars fa-lg"></i>
        </div>
        <div id="menu">
          <i className="fas fa-times fa-2x"></i>
          <ul>
            <li>
              <a href="#home" className="menu-links">
                Home
              </a>
            </li>
            <li>
              <a href="#technologies" className="menu-links">
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-links">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="menu-links">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-links">
                Contact
              </a>
            </li>
            <li>
              <a
                href="./assets/etc/TonyWong-Resume.pdf"
                download="TonyWong-Resume"
                className="menu-links"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
