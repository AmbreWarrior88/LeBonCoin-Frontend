import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/index";
import Offers from "./Containers/Offers/index";
import Offer from "./Containers/Offer/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Offers">
          <Offers />
        </Route>
        <Route path="/Offer">
          <Offer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
