import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="main">
        <h1 className="header">Get In Touch</h1>
        <p>
          I'm always open to collaborations and opportunities of any sort.
          Whether you have a question or just want to say hi, shoot me an email
          and I'll try my best to get back to you!
        </p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/wongtonyb/">
              <i class="devicon-linkedin-plain"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/wongtonyb">
              <i class="devicon-github-plain"></i>
            </a>
          </li>
          <li>
            <a href="mailto:wongtonyb@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
        <a href='href="mailto:wongtonyb@gmail.com"'>Say Hello</a>
        <footer>© 2020 | Designed and Built by Tony Wong</footer>
      </div>
    );
  }
}
