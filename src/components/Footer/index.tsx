import React from "react";
import style from "./styles.module.scss";
import logo from "../../asset/images/logo.png";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className={style.footer}>
        <img src={logo} alt="logo image" />
      </div>
    );
  }
}

export default Footer;
