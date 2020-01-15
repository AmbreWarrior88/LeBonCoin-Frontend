import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../../images/logo-leboncoin.png";
import "./style.css";
import { AddBox, Search, PersonOutline } from "@material-ui/icons";

const Header = () => {
  return (
    <header>
      <ul className="container menu">
        <li>
          <ul>
            <Link to="/">
              <img className="logo" alt="" src={Logo}></img>
            </Link>
            <Link to="/publish">
              <button className="push-item">
                <AddBox />
                Déposer une annonce
              </button>
            </Link>
            <button className="research">
              <Search />
              Rechercher
            </button>
          </ul>
        </li>
        <li className="login">
          <PersonOutline />
          <span>Se connecter</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
