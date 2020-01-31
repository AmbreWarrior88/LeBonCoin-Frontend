import React, { useState } from "react";
import "./style.css";
import "../../App.css";
import {
  QueryBuilder,
  NotificationsOutlined,
  RemoveRedEyeOutlined
} from "@material-ui/icons";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  return (
    <section className="signup-page box-shadow">
      <div className="left">
        <h2>Pourquoi créer un compte?</h2>
        <div className="paragraph d-f">
          <QueryBuilder className="logo-color" />

          <div className="words">
            <h3>Gagner du temps</h3>
            <p>
              Publiez vos annonces rapidement, avec vos informations pré-remplis
              chaque fois que vous souhaitez déposer une nouvelle annonce.
            </p>
          </div>
        </div>
        <div className="paragraph d-f">
          <NotificationsOutlined className="logo-color" />
          <div className="words">
            <h3>Soyez les premiers informés</h3>
            <p>
              Créer des alertes Immo ou Emploi et ne manquez jamais l'annonce
              qui vous intéresse.
            </p>
          </div>
        </div>
        <div className="paragraph d-f">
          <RemoveRedEyeOutlined className="logo-color" />
          <div className="words">
            <h3>Visibilité</h3>
            <p>
              Suivez les statistiques de vos anonces (nombre de fois où votre
              annonce a été vue, nombre de contrats reçus).
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <form>
          <h2 className="title">Créer un compte</h2>
          <h4>Pseudo *</h4>
          <input className="input" type="text" value={userName} />
          <h4>Adresse Email *</h4>
          <input className="input" type="email" value={email} />

          <div className="d-f">
            <span className="left-password">
              <h4>Mot de passe *</h4>
              <input className="input" type="password" value={password} />
            </span>
            <span>
              <h4>Confirmer *</h4>
              <input
                className="input"
                type="password"
                value={passwordConfirm}
              />
            </span>
          </div>

          <div>
            <input type="checkbox" value={checkBox} id="csg" />
            <label for="csg">
              J'accepte les Conditions Générales de Vente et les Conditions
              Générales d'Utilisation
            </label>
          </div>

          <button className="blue-button button">
            Créer mon Compte Personnel
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
