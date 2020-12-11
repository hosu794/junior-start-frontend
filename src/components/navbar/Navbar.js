import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { LogoLayout, NavbarLayout } from "../../styles/navbarStyles";
import AuthModal from "../auth/AuthModal";
import { CenteredModal } from "../../styles/modalStyles";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { authenticationActions } from "../../actions";
import { currrentUserSelector } from "../../selectors";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const user = useSelector(currrentUserSelector);
  const dispatch = useDispatch();

  function updateShowAuthModal() {
    setModal(!modal);
  }

  function logout() {
    dispatch(authenticationActions.logout());
    dispatch(authenticationActions.logoutAuth02token());
  }

  return (
    <NavbarLayout>
      <LogoLayout>Junior start</LogoLayout>
      {!user ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={updateShowAuthModal}
        >
          Zaloguj
        </Button>
      ) : (
        <div>
          <Button variant="outlined" color="primary">
            {user.email}
          </Button>
          <Button variant="contained" onClick={logout} color="primary">
            Wyloguj się
          </Button>
        </div>
      )}
      <CenteredModal open={modal} onClose={updateShowAuthModal}>
        <AuthModal />
      </CenteredModal>
    </NavbarLayout>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
};

export default Navbar;
