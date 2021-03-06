import React from "react";
import Navbar from "./Navbar";
import Home, { AddRecipes } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-recipes" component={AddRecipes} />
      </Switch>
    </Router>
  );
}
