import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import style from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <Logo />
      <Button text="+ADD MOVIE" className={style.button} />
    </>
  );
}
