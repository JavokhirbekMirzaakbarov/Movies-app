import React from "react";
import logo from "../../asset/images/logo.png";
import style from "./style.module.scss";

export default function Logo() {
  return <img src={logo} className={style.logo} alt="Netflix logo" />;
}
