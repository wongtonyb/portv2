import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div id="hero" className="main">
        <h1>Hi, my name is</h1>
        <h2>Tony Wong</h2>
        <p>
          I'm a software engineer based in New York City specializing in
          building exceptional websites, applications, and everything in
          between.
        </p>
        <a href="mailto:wongtonyb@gmail.com">Get In Touch</a>
      </div>
    );
  }
}
