import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {LogoLayout, NavbarLayout} from "../../styles/navbarStyles";

class Navbar extends Component {
    render() {
        return (
            <NavbarLayout>
                <LogoLayout>Junior start</LogoLayout>
                <Button variant="outlined" color="primary">
                    Zaloguj
                </Button>
            </NavbarLayout>
        );
    }
}

export default Navbar;