import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div id="skills" className="main">
        <h1 className="header">
          III. <span>Some Technologies I've Worked With</span>
        </h1>
        <div id="skills-container">
          <h1>Languages</h1>
          <div className="tech">
            <div className="icon-wrapper">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#F0DB4F"
                  d="M1.408 1.408h125.184v125.185h-125.184z"
                ></path>
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                ></path>
              </svg>
              <label>JavaScript</label>
            </div>
            <div className="icon-wrapper">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#0074BD"
                  d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                ></path>
              </svg>
              <label>Java</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-python-plain colored"></i>
              <label>Python</label>
            </div>
          </div>
          <h1>Frontend</h1>
          <div className="tech">
            <div className="icon-wrapper">
              <i class="devicon-html5-plain colored"></i>
              <label>HTML5</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-css3-plain colored"></i>
              <label>CSS3</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-jquery-plain colored"></i>
              <label>jQuery</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-react-original colored"></i>
              <label>React</label>
            </div>
            <div className="icon-wrapper">
              <span
                class="iconify"
                data-icon="logos:redux"
                data-inline="false"
                data-width="5rem"
              ></span>
              <label>Redux</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-webpack-plain colored"></i>

              <label>Webpack</label>
            </div>
          </div>
          <h1>Backend</h1>
          <div className="tech">
            <div className="icon-wrapper">
              <i class="devicon-nodejs-plain colored"></i>
              <label>Node.js</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-express-original colored"></i>

              <label>Express</label>
            </div>
            <div className="icon-wrapper">
              <span
                class="iconify"
                data-icon="logos:apollostack"
                data-inline="false"
                data-width="5rem"
              ></span>
              <label>Apollo</label>
            </div>
            <div className="icon-wrapper">
              <span
                class="iconify"
                data-icon="logos:graphql"
                data-inline="false"
                data-width="5rem"
              ></span>
              <label>graphQL</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-postgresql-plain colored"></i>
              <label>PostgreSQL</label>
            </div>
          </div>
          <h1>DevOps / Testing</h1>
          <div className="tech">
            <div className="icon-wrapper">
              <i class="devicon-babel-plain colored"></i>
              <label>Babel</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-heroku-original colored"></i>
              <label>Heroku</label>
            </div>
            <div className="icon-wrapper">
              <img src="./assets/tech/3travis.png" />
              <label>Travis CI</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-jasmine-plain colored"></i>

              <label>Jasmine</label>
            </div>
            <div className="icon-wrapper">
              <span
                class="iconify"
                data-icon="logos:mocha"
                data-inline="false"
                data-width="5rem"
              ></span>
              <label>Mocha</label>
            </div>
            <div className="icon-wrapper">
              <span
                class="iconify"
                data-icon="logos:chai"
                data-inline="false"
                data-width="5rem"
                data-height="5rem"
              ></span>
              <label>Chai</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-amazonwebservices-original colored"></i>
              <label>AWS</label>
            </div>
          </div>
          <h1>Other Tools</h1>
          <div className="tech">
            <div className="icon-wrapper">
              <i class="devicon-git-plain colored"></i>
              <label>git</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-npm-original-wordmark colored"></i>
              <label>npm</label>
            </div>
            <div className="icon-wrapper">
              <i class="devicon-github-plain colored"></i>
              <label>Github</label>
            </div>
            <div className="icon-wrapper">
              <img src="./assets/tech/5vscode.png" />
              <label>VSCode</label>
            </div>
            <div className="icon-wrapper">
              <img src="./assets/tech/5postico.png" />
              <label>Postico</label>
            </div>
            <div className="icon-wrapper">
              <img src="./assets/tech/5postman.png" />
              <label>Postman</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
