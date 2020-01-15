import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
import Offers from "./Containers/Offers/index";
import Offer from "./Containers/Offer/index";
import Publish from "./Containers/Publish/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Offers />
        </Route>
        <Route path="/Offer">
          <Offer />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
