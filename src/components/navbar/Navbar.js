import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {LogoLayout, NavbarLayout} from "../../styles/navbarStyles";
import AuthModal from "../auth/AuthModal";
import {CenteredModal} from "../../styles/modalStyles";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAuthModal: false
        }
    }

    updateShowAuthModal = () => {
        this.setState({
            showAuthModal: !this.state.showAuthModal
        })
    }

    render() {
        return (
            <NavbarLayout>
                <LogoLayout>Junior start</LogoLayout>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.updateShowAuthModal}
                >
                    Zaloguj
                </Button>

                <CenteredModal
                    open={this.state.showAuthModal}
                    onClose={this.updateShowAuthModal}
                >
                    <AuthModal/>
                </CenteredModal>
            </NavbarLayout>
        );
    }
}

export default Navbar;