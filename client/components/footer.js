import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="comp has-overlay" id="footer">
        <div id="footer-icon-container">
          <a
            href="https://www.linkedin.com/in/wongtonyb/"
            className="footer-icon"
          >
            <i className="fab fa-linkedin fa-2x footer-linkedin" />
          </a>
          <a href="https://github.com/wongtonyb" className="footer-icon">
            <i className="fab fa-github fa-2x footer-github" />
          </a>
          <a href="mailto:wongtonyb@gmail.com" className="footer-icon">
            <i className="fas fa-envelope fa-2x footer-email" />
          </a>
        </div>
        <h3>© 2020 | Developed by Tony Wong</h3>
      </div>
    );
  }
}
