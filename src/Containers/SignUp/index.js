import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import "../../App.css";
import {
  QueryBuilder,
  NotificationsOutlined,
  RemoveRedEyeOutlined
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const SignUp = props => {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  let isEnabled = false;

  if (
    checkBox === true &&
    password === passwordConfirm &&
    userName !== "" &&
    email !== "" &&
    password !== "" &&
    passwordConfirm !== ""
  ) {
    isEnabled = true;
  }

  return (
    <section className="signup-page box-shadow">
      {/* --------Reading---------- */}
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

      {/* -------SignUp------- */}
      <div className="right">
        <form
          onSubmit={async event => {
            event.preventDefault();
            if (isEnabled === true) {
              const response = await axios.post(
                "https://leboncoin-api.herokuapp.com/api/user/sign_up",
                {
                  email: email,
                  username: userName,
                  password: password
                }
              );
              console.log("token", response.data.token);

              props.setUser(response.data);
              history.push("/");
            } else {
              alert("Vérifiez votre saisie");
            }
          }}
        >
          <h2 className="account d-f">Créer un compte</h2>
          <h4>Pseudo *</h4>
          <input
            className="input"
            type="text"
            value={userName}
            onChange={event => {
              setUserName(event.target.value);
            }}
          />
          <h4>Adresse Email *</h4>
          <input
            className="input"
            type="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />

          <div className="d-f">
            <span className="left-password">
              <h4>Mot de passe *</h4>
              <input
                className="input"
                type="password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </span>
            <span>
              <h4>Confirmer *</h4>
              <input
                className="input"
                type="password"
                value={passwordConfirm}
                onChange={event => {
                  setPasswordConfirm(event.target.value);
                }}
              />
            </span>
          </div>

          <div className="d-f">
            <input
              className="box"
              type="checkbox"
              checked={checkBox}
              onChange={event => {
                setCheckBox(event.target.checked);
              }}
            />
            <p>
              "J'accepte les Conditions Générales de Vente et les Conditions
              Générales d'Utilisation"
            </p>
          </div>

          <button type="submit" className="blue-button button mt-10">
            Créer mon Compte Personnel
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
