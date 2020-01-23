import React from "react";
import "../Search/style.css";
import "../../App.css";

const ReSearch = () => {
  return (
    <div>
      <div className="background" />
      <div className="container pv-50 ">
        <div className="search-box box-shadow br-5 pv-50">
          <form className="items">
            <input
              className="search-input"
              type="text"
              placeholder="🔍 Que recherchez-vous ?"
            />
            <button className="blue-button search-button">Rechercher</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReSearch;
