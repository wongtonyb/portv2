import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="comp has-overlay" id="about">
        <h1>About Me</h1>
        <div id="about-container">
          <div className="col">
            <h3>Background</h3>
            <p>
              Since a young age I was always fascinated by technology. I was
              also a math enthusiast which led me to study mechanical
              engineering at the University at Buffalo. Along the way I
              developed a new passion for design and programming. After college,
              I wanted to continue pursuing programming, thus, I attended
              Fullstack Academy where I dove into the concepts of web/mobile
              application development and computer science fundamentals.
              <br />
              <br />
              Since then, I have continued exploring topics like data structures
              and algorithms, while learning new frameworks and technolgoies. I
              enjoy building applications using the NERP stack (NodeJS, Express,
              React/Redux, PostgreSQL) focusing on writing clean, reusable, and
              organized code.
              <br />
              <br />
              Currently, I'm looking for opportunities to work in a fast-paced
              collaborative environment where I'm able to explore different
              areas of software development so I can continue to learn and grow
              as an engineer. When I'm not coding, you'll find me working out at
              the gym, exploring new resturants, or planning my next travels.
            </p>
          </div>
          <div className="col">
            <h3>Education</h3>
            <p>
              <span>Fullstack Academy</span> <br />
              15-weeks full-time software engineering immersive web development
              bootcamp. Coursework: CSS (flexbox), SQL, React, Redux, TDD,
              algorithms, agile methodologies, and development best practices.
            </p>
            <p>
              <span>University at Buffalo</span>
              <br />
              B.S. Mechanical Engineering
              <br />
              Relevant Coursework: Calculus, Engineering Computations,
              Differential Equations, Probability and Statistics, Applied
              Mathematics for Engineering, Design Process & Methods
            </p>
          </div>
          <div className="col">
            <h3>Contact</h3>
            <img src="./assets/etc/about-me.jpg" id="about-pp" />
            <br />
            <a
              href="https://www.linkedin.com/in/wongtonyb/"
              className="about-links"
            >
              <i
                href="https://www.linkedin.com/in/wongtonyb/"
                className="fab fa-linkedin about-icons"
              />
              | LinkedIn
            </a>
            <br />
            <a href="https://github.com/wongtonyb" className="about-links">
              <i className="fab fa-github about-icons" />| Github
            </a>
            <br />
            <a href="./assets/etc/TonyWong-Resume.pdf" className="about-links">
              <i className="far fa-file-alt about-icons" />| Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}
