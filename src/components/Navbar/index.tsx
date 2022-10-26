import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../Logo";
import SearchIcon from "@mui/icons-material/Search";
import style from "./styles.module.scss";

interface NavbarProps {
  openModal: () => void;
  toggle: (a: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = ({ openModal, toggle }) => {
  return (
    <Box className={style.navbar}>
      <Logo />
      <SearchIcon
        className={style.icon}
        fontSize="large"
        onClick={() => toggle(false)}
      />
      <Button onClick={() => openModal()} className={style.button}>
        +ADD MOVIE
      </Button>
    </Box>
  );
};

export default Navbar;
