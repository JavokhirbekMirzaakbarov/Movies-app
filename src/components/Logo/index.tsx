import React from "react";
import logo from "../../asset/images/logo.png";
import style from "./style.module.scss";

class Logo extends React.PureComponent {
  render() {
    return <img src={logo} className={style.logo} alt="Netflix logo" />;
  }
}

export default Logo;
