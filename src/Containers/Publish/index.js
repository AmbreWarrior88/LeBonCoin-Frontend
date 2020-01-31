import React from "react";
import "./style.css";
import "../../App.css";

const Publish = () => {
  return (
    <section className="container">
      <div className="box-shadow ">
        <div className="publish-page ">
          <h2 className="publish d-f">Déposer une annonce</h2>
          <h3>Titre de l'annonce *</h3>
          <input className="input" type="text" />
          <h3>Texte de l'annonce *</h3>
          <input className="announce-input" type="text" />
          <h3>Prix *</h3>
          <input className="price-input" type="number" />
          <span>€</span>
          <h3>Photo *</h3>
          <div className="choose-file">
            <input placeholder="Choose file" />
            <span>No file chosen</span>
          </div>
          <button className="blue-button button submit">Valider</button>
        </div>
      </div>
    </section>
  );
};

export default Publish;
