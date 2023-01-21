import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/images/logo.png";
import style from "./style.module.scss";

const Logo = () => (
  <Link to="/">
    <img src={logo} className={style.logo} alt="Netflix logo" />
  </Link>
);

export default Logo;
