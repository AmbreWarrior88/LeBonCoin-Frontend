import React from "react";
import "../Search/style.css";
import "../../App.css";

const ReSearch = () => {
  return (
    <div>
      <div className="container pv-50 position">
        <div className="search-box box-shadow br-5 pv-50">
          <form>
            <input type="text" placeholder="🔍 Que recherchez-vous ?" />
            <button className="blue-button">Rechercher</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReSearch;
