import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="comp" id="home">
        <div id="about-text-container">
          <h2>Hi I'm Tony</h2>
          <h1>A FULLSTACK SOFTWARE ENGINEER</h1>
          <h3>
            I'm passionate about bringing creativity into design and problem
            solving
          </h3>
          <h3>
            I enjoy building dynamic fullstack web and mobile applications using
            popular technologies such as NodeJS, React, Redux, PostgreSQL, and
            many <span>more</span>
          </h3>
        </div>
        <img src="./assets/etc/op-me.png" />
      </div>
    );
  }
}

export default Home;
