import React from "react";

import "../../App.css";

const Publish = () => {
  return (
    <div className="container">
      <p>Déposer une annonce</p>
      <p>Titre de l'annonce *</p>
      <input />
      <p>Texte de l'annonce *</p>
      <input />
      <p>Prix *</p>
      <input />
      <span>€</span>
      <p>Photo *</p>
      <input placeholder="Chosse file" />
      <span>No file chosen</span>
      <button className="blue-button">Valider</button>
    </div>
  );
};

export default Publish;
