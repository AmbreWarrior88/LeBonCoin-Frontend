import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
import Offers from "./Containers/Offers/index";
import Offer from "./Containers/Offer/index";
import Publish from "./Containers/Publish/index";
import Login from "./Components/Login/index";
import "./App.css";
import "./Components/Login/style.css";
import { Clear } from "@material-ui/icons";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count"
      );

      setOffers(response.data.offers);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Router>
      {modal === true && (
        <div className="page">
          <div
            className="modal-close"
            onClick={() => {
              setModal(false);
            }}
          >
            <Clear />
          </div>
          <div className="modal-content">
            <Login setModal={setModal} />
          </div>
        </div>
      )}
      <Header setModal={setModal} />
      <Switch>
        <Route exact path="/">
          <Offers offers={offers} />
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
