import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Nav,
  Menu,
  Home,
  Technologies,
  Projects,
  About,
  Contact,
  Footer
} from "./components";

const App = () => {
  return (
    <Router>
      <Nav />
      <Menu />
      <Home />
      <Technologies />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
