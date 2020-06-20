import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Preload,
  Navbar,
  Hero,
  About,
  Works,
  Projects,
  Skills,
  Contact,
} from "./components";

const App = () => {
  return (
    <Router>
      <Preload />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Projects />
      <Skills />
      <Contact />
    </Router>
  );
};

export default App;
