import React from "react";
import "./style.css";
import "../../App.css";

import { ShoppingCartOutlined } from "@material-ui/icons";

const Offer = () => {
  return (
    <div>
      <div className="container d-f">
        <div>
          <div className="offer-card box-shadow mt-30">
            <div className="bg-silver center picture">
              <img src="../../images/empty-image.png" alt="" />
            </div>

            <div className="infos">
              <p className="title">Titre de l'annonce</p>
              <p className="price">Prix € </p>
              <p className="date">Date</p>
            </div>
          </div>
          <div>
            <p className="title-description">Description</p>
            <p className="offer-description">Description de l'annonce</p>
          </div>
        </div>
        <aside className="mt-30 box-shadow">
          <div>
            <div className="username">Pseudo</div>
            <button className="number-offer">Annonces</button>
            <button className="shop">
              <ShoppingCartOutlined fontSize="20px" />
              Acheter
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Offer;
