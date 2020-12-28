import React from "react";
import Button from "@material-ui/core/Button";
import { MenuLayout } from "../../styles/menuStyles";
import { Link } from "react-router-dom";

const RightMenu = () => (
  <MenuLayout>
    <Button variant="outlined" color="primary">
      <Link to="/create/project"> Stwórz projekt</Link>
    </Button>
    <Button variant="outlined" color="primary">
      Dodaj kod
    </Button>
    <Button variant="outlined" color="primary">
      Szukaj pracy
    </Button>
    <Button variant="outlined" color="primary">
      Dodaj post na forum
    </Button>
    <Button variant="outlined" color="primary">
      Nabór do projektu
    </Button>
  </MenuLayout>
);

export default RightMenu;
