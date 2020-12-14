import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { LogoLayout, NavbarLayout } from "../../styles/navbarStyles";
import AuthModal from "../auth/AuthModal";
import { CenteredModal } from "../../styles/modalStyles";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { authenticationActions } from "../../actions";
import { currrentUserSelector } from "../../selectors";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const user = useSelector(currrentUserSelector);
  const dispatch = useDispatch();

  function updateShowAuthModal() {
    setModal(!modal);
  }

  const logout = async () => {
    await dispatch(authenticationActions.logout());
    await dispatch(authenticationActions.logoutAuth02token());
    history.go(0);
  };

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
