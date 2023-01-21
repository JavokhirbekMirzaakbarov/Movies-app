import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../Logo";
import SearchIcon from "@mui/icons-material/Search";
import style from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  openModal: () => void;
  toggle: (a: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = ({ openModal, toggle }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    toggle(false);
    navigate("/");
  };

  return (
    <Box className={style.navbar}>
      <Logo />
      <SearchIcon className={style.icon} fontSize="large" onClick={handleClick} />
      <Button onClick={() => openModal()} className={style.button}>
        +ADD MOVIE
      </Button>
    </Box>
  );
};

export default Navbar;
