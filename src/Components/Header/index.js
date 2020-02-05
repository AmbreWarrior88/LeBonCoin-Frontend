import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../../images/logo-leboncoin.png";
import "./style.css";
import { AddBox, Search, PersonOutline } from "@material-ui/icons";
import Cookies from "js-cookie";

const Header = props => {
  return (
    <header className="box-shadow">
      <ul className="container menu">
        <li className=" left-menu">
          <ul>
            <Link to="/">
              <img className="logo" alt="Logo LeBonCoin" src={Logo}></img>
            </Link>

            {/* Upload */}
            <Link className="no-decoration" to="/publish">
              <button className="push-item">
                <AddBox />
                Déposer une annonce
              </button>
            </Link>

            {/* Search */}
            <Link to="/" className="no-decoration">
              <button className="research">
                <Search />
                Rechercher
              </button>
              <div className="bottom-bar" />
            </Link>
          </ul>
        </li>

        {/* LogIn / LogOut */}
        {props.user.token ? (
          <li
            className="login"
            onClick={() => {
              props.setUser({});
              Cookies.remove("token");
            }}
          >
            <PersonOutline />
            <span>Se déconnecter</span>
          </li>
        ) : (
          <li
            className="login"
            onClick={() => {
              props.setModal(true);
            }}
          >
            <PersonOutline />
            <span>Se connecter</span>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
