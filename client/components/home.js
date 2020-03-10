import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="comp has-overlay" id="home">
        <div id="home-text-container">
          <h2>Hi I'm Tony</h2>
          <h1>A FULLSTACK SOFTWARE ENGINEER</h1>
          <h3>
            I'm passionate about bringing creativity into design and problem
            solving
          </h3>
          <h3>
            I enjoy building dynamic fullstack web and mobile applications using
            popular technologies such as NodeJS, React, Redux, PostgreSQL, and
            many{" "}
            <span>
              <a href="#technologies">more</a>
            </span>
          </h3>
        </div>
        <img src="./assets/etc/op-me.png" />
      </div>
    );
  }
}

export default Home;
