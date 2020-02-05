import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "./style.css";
import "../../App.css";
import Axios from "axios";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="modal"
      onSubmit={async event => {
        event.preventDefault();
        try {
          const response = await Axios.post(
            "https://leboncoin-api.herokuapp.com/api/user/log_in",
            { email: email, password: password }
          );
          console.log("token", response.data.token);
          if (response.data.token) {
            Cookies.set("token", response.data.token);
            props.setModal(false);
            props.setUser(response.data);
          }
        } catch (error) {
          alert("Mauvais email ou mot de passe");
        }
      }}
    >
      <div className="wrap">
        <p className="connexion d-f">Connexion</p>
        <p className="title-input">Adresse email</p>
        <input
          className="input"
          type="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <p className="title-input">Mot de passe</p>
        <input
          className="input"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <input
          className="blue-button button mt-20"
          type="submit"
          value={"Se connecter"}
        />
      </div>

      <p className="title-input new-account d-f">Vous n'avez pas de compte?</p>
      <div className="wrap">
        <Link
          to="/sign_up"
          onClick={() => {
            props.setModal(false);
          }}
        >
          <button className="blue-button button">Créer un compte</button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
