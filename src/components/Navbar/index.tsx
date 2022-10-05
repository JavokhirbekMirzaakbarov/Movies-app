import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../Logo";
import style from "./styles.module.scss";

interface NavbarProps {
  openModal: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ openModal }) => {
  return (
    <Box className={style.navbar}>
      <Logo />
      <Button onClick={() => openModal()} className={style.button}>
        +ADD MOVIE
      </Button>
    </Box>
  );
};

export default Navbar;
