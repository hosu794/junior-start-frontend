import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { MenuLayout } from "../../styles/menuStyles";

const LeftMenu = () => (
    <MenuLayout>
        <Button variant="outlined" color="primary">
            Code review
    </Button>
        <Button variant="outlined" color="primary">
            Projekty
    </Button>
        <Button variant="outlined" color="primary">
            Ogłoszenia o pracę
    </Button>
        <Button variant="outlined" color="primary">
            Mentorzy
    </Button>
        <Button variant="outlined" color="primary">
            Forum
    </Button>
    </MenuLayout>
)

export default LeftMenu;