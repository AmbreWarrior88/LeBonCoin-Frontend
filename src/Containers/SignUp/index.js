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
    <div className="signup-page box-shadow">
      <span>
        <p>Pourquoi créer un compte?</p>
        <div>
          <QueryBuilder className="logo-color" />
          <p>Gagner du temps</p>
          <p>
            Publiez vos annonces rapidement, avec vos informations pré-remplis
            chaque fois que vous souhaitez déposer une nouvelle annonce.
          </p>
        </div>
        <div>
          <NotificationsOutlined className="logo-color" />
          <p>Soyez les premiers informés</p>
          <p>
            Créer des alertes Immo ou Emploi et ne manquez jamais l'annonce qui
            vous intéresse.
          </p>
        </div>
        <div>
          <RemoveRedEyeOutlined className="logo-color" />
          <p>Visibilité</p>
          <p>
            Suivez les statistiques de vos anonces (nombre de fois où votre
            annonce a été vue, nombre de contrats reçus).
          </p>
        </div>
      </span>
      <span>
        <form>
          <p>Créer un compte</p>
          <p>Pseudo *</p>
          <input type="text" value={userName} />
          <p>Adresse Email *</p>
          <input type="email" value={email} />
          <span>
            <p>Mot de passe *</p>
            <input type="password" value={password} />
          </span>
          <span>
            <p>Confirmer le mot de passe *</p>
            <input type="password" value={passwordConfirm} />
          </span>
          <div>
            <input type="checkbox" value={checkBox} />
            <p>
              "J'accepte les Conditions Générales de Vente et les Conditions
              Générales d'Utilisation"
            </p>
          </div>

          <button className="blue-button">Créer mon Compte Personnel</button>
        </form>
      </span>
    </div>
  );
};

export default SignUp;
