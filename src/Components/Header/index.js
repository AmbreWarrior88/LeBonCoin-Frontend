import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../../images/logo-leboncoin.png";
import "./style.css";
import { AddBox, Search, PersonOutline } from "@material-ui/icons";

const Header = props => {
  return (
    <header className="box-shadow">
      <ul className="container menu">
        <li className=" left-menu">
          <ul>
            <Link to="/">
              <img className="logo" alt="Logo LeBonCoin" src={Logo}></img>
            </Link>
            <Link className="no-decoration" to="/publish">
              <button className="push-item">
                <AddBox />
                Déposer une annonce
              </button>
            </Link>
            <Link to="/" className="no-decoration">
              <button className="research">
                <Search />
                Rechercher
              </button>
              <div className="bottom-bar" />
            </Link>
          </ul>
        </li>
        <li
          className="login"
          onClick={() => {
            props.setModal(true);
          }}
        >
          <PersonOutline />
          <span>Se connecter</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
