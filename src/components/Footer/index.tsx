import React from "react";
import style from "./styles.module.scss";
import logo from "../../asset/images/logo.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <img src={logo} alt="logo image" />
    </div>
  );
};

export default Footer;
