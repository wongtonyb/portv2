import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
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
