import React from "react";

import ReSearch from "../../Components/Search/index";
import OfferCard from "../../Components/OfferCard/index";

const Offers = props => {
  const offers = props.offers;

  return (
    <div className="container">
      <ReSearch />
      <div className=" offers">
        {offers.map(offer => {
          return <OfferCard {...offer} />;
        })}
      </div>
    </div>
  );
};

export default Offers;
