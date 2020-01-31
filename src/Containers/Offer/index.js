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
      console.log(response.data);
      setOffer(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <div className="container d-f">
          <div>
            <div className="offer-card box-shadow mt-30">
              <div className="bg-silver center picture">
                <img src={offer.pictures} alt="" />
              </div>

              <div className="infos">
                <p className="title">{offer.title}</p>
                <p className="price">{offer.price}</p>
                <p className="date">{offer.created}</p>
              </div>
            </div>
            <div>
              <p className="title-description">Description</p>
              <p className="offer-description">{offer.description}</p>
            </div>
          </div>
          <aside className="mt-30 box-shadow">
            <div>
              <div className="username">{offer.creator.account.username}</div>
              <button className="number-offer">Annonces</button>
              <button className="shop">
                <ShoppingCartOutlined fontSize="20px" />
                Acheter
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Offer;
