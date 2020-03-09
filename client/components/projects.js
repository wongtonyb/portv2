import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="comp has-overlay" id="projects">
        {/* <h1>PROJECTS</h1> */}
        <div className="project-container">
          <div className="indv-projects">
            <img className="project-img" src="./assets/projects/postar.jpg" />
            <div className="summary">
              <h1>POSTAR</h1>
              <h3>(REACT-NATIVE, VIRO, APOLLO, GRAPHQL, PRISMA)</h3>
              <p>
                PostAR is an augmented reality message posting mobile
                application. You can leave 3D text post in the AR world to guide
                visitors, share real time interavtive social messages, or ismply
                create a private to-do list that will never get lost.
                <br />
                <br />
              </p>
              <div className="links-container">
                <a
                  href="https://github.com/fullstack-yogis/postAR"
                  className="project-link"
                >
                  <i className="fab fa-github links-icon" />
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="indv-projects">
            <div className="summary">
              <h1>RAINFOREST</h1>
              <h3>(REACT, REDUX, EXPRESS, POSTGRESQL)</h3>

              <p>
                Rainforest is a mock e-commerce website dedicated to selling
                books. It features google OAuth sign up and login and stripe API
                payment. It is also deployed on Heroku with Travis CI for
                continuous integration.
                <br />
                <br />
              </p>
              <div className="links-container">
                <a
                  href="https://github.com/One-Team-One-Dream-OTOD/Grace-Shopper"
                  className="project-link"
                >
                  <i className="fab fa-github links-icon" />
                  Github
                </a>
                <a
                  href="http://rainforest-grace-shopper.herokuapp.com/"
                  className="project-link"
                >
                  <i className="fas fa-window-maximize links-icon" />
                  Demo
                </a>
              </div>
            </div>
            <img
              className="project-img"
              src="./assets/projects/rainforest-site.png"
            />
          </div>
          <div className="indv-projects">
            <img className="project-img" src="./assets/projects/smile.png" />
            <div className="summary">
              <h1>SMILE</h1>
              <h3>(NODEJS, REACT-NATIVE, EXPO)</h3>
              <p>
                Smile is a mobile application that uses its built-in cameras to
                track faces, determine facial features and expressions, and
                apply different filters based on the those features. It able to
                detect multiple faces in a setting and calculate a smiling
                percentage base on the person's facial features. This
                application was built during a two-day hack-a-thon using React
                Native and Expo.
                <br />
                <br />
              </p>
              <div className="links-container">
                <a
                  href="https://github.com/wongtonyb/Stackathon-Facial-Recognition"
                  className="project-link"
                >
                  <i className="fab fa-github links-icon" />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
