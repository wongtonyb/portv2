import React, { Component } from "react";

export default class Works extends Component {
  render() {
    return (
      <div id="works" className="main">
        <h1 className="header">
          II. <span>Some Things I've Built</span>
        </h1>
        <div id="stocfolio" className="feature">
          <img src="./assets/projects/stocfolio.png" />
          <div className="text-container">
            <h1>Featured Project</h1>
            <h2>Stocfolio</h2>
            <p>
              Practice trading and managing your stocks. Get real time data on
              tickers, buy and sell shares of the stock, and track your
              transactions and overall portfolio performance.
            </p>
            <ul className="stack">
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>IEX API</li>
              <li>Heroku</li>
            </ul>
            <div className="icon">
              <a href="https://github.com/wongtonyb/stocks-portfolio">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://stocfolio.herokuapp.com">
                <i className="fas fa-external-link-alt fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div id="postar" className="feature">
          <div className="text-container">
            <h1>Featured Project</h1>
            <h2>PostAR</h2>
            <p>
              Whether it's to guide visitors or to create a simple to-do list,
              you can do so by sharing fun real time interactive social messages
              in the augmented reality of PostAR.
            </p>
            <ul className="stack">
              <li>React-Native</li>
              <li>Viro-React</li>
              <li>Apollo</li>
              <li>GraphQL</li>
              <li>Prisma</li>
            </ul>
            <div className="icon">
              <a href="https://github.com/fullstack-yogis/postAR">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
          <img src="./assets/projects/postar.png" />
        </div>
      </div>
    );
  }
}
