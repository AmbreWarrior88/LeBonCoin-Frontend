import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../OfferCard/style.css";
import Photo from "../../images/empty-image.png";

const OfferCard = props => {
  const date = new Date(props.created);

  return (
    <div>
      <Link
        to={`/offer/${props._id}`}
        className="d-f box-shadow overflow-hidden br-5 mb-20 no-decoration"
      >
        <div className="bg-silver d-flex">
          <img alt="" src={props.pictures} />
        </div>
        <div className="description pl-15">
          <p className="title">{props.title}</p>
          <p className="price">{props.price} €</p>
          <p className="date">
            {date.toLocaleDateString()} à {date.toLocaleTimeString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

OfferCard.defaultProps = {
  title: "Non renseigné",
  pictures: Photo,
  price: "N/C",
  description: "Non renseigné"
};

export default OfferCard;
