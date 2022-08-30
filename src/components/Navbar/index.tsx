import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../Logo";
import style from "./styles.module.scss";

class Navbar extends React.Component {
  render() {
    return (
      <Box className={style.navbar}>
        <Logo />
        <Button className={style.button}>+ADD MOVIE</Button>
      </Box>
    );
  }
}

export default Navbar;
