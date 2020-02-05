import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import "../../App.css";

import { ShoppingCartOutlined } from "@material-ui/icons";

const Offer = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [offer, setOffer] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
      );
      setOffer(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  const date = new Date(offer.created);

  return (
    <div>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <div className="container d-f">
          <div>
            <div className="offer-card box-shadow mt-30">
              <img
                className="bg-silver center picture"
                src={offer.pictures}
                alt=""
              />

              <div className="infos">
                <p className="title">{offer.title}</p>
                <p className="price">{offer.price}€</p>
                <p className="date">
                  {date.toLocaleDateString()} à {date.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div>
              <p className="title-description">Description</p>
              <p className="offer-description">{offer.description}</p>
            </div>
          </div>
          <aside className="mt-30 box-shadow d-f">
            <div className="wrap-offer">
              <p className="username ">{offer.creator.account.username}</p>
              <p className="number-offer ">17 annonces en ligne</p>

              <button className="shop">
                <ShoppingCartOutlined />
                <span className="button-item">Acheter</span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Offer;
