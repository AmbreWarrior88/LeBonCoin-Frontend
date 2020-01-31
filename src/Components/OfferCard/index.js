import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../OfferCard/style.css";
import Photo from "../../images/empty-image.png";

const OfferCard = props => {
  return (
    <div>
      <Link
        to="/offer/"
        className="d-f box-shadow overflow-hidden br-5 mb-20 no-decoration"
      >
        <div className="bg-silver d-flex">
          <img
            alt="Photo de l'annonce"
            src={props.pictures === null ? Photo : props.pictures}
          />
        </div>
        <div className="description pl-15">
          <p className="title">{props.title}</p>
          <p className="price">{props.price} €</p>
          <p className="date">{props.created}</p>
        </div>
      </Link>
    </div>
  );
};

export default OfferCard;
