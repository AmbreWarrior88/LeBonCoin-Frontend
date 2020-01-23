import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="modal">
      <p className="connexion">Connexion</p>
      <p className="title-input">Adresse email</p>
      <input
        type="email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      ></input>
      <p className="title-input">Mot de passe</p>
      <input
        type="password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      ></input>
      <input
        className="blue-button"
        type="submit"
        value={"Se connecter"}
      ></input>
      <p>Vous n'avez pas de compte?</p>
      <Link
        to="/sign_up"
        onClick={() => {
          props.setModal(false);
        }}
      >
        <button className="blue-button">Créer un compte</button>
      </Link>
    </form>
  );
};

export default Login;
