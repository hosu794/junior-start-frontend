import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {MenuLayout} from "../../styles/menuStyles";
import {Link} from "react-router-dom";

class RightMenu extends Component {
    render() {
        return (
            <MenuLayout>
                <Button variant="outlined" color="primary">
                    Stwórz projekt
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
                <Button component={Link} to='wiadomosci' variant="outlined" color="primary">
                    Wiadomości
                </Button>
            </MenuLayout>
        );
    }
}

export default RightMenu;