import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import style from "./styles.module.scss";

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <Logo />
        <Button text="+add movie" className={style.button} />
      </>
    );
  }
}

export default Header;
