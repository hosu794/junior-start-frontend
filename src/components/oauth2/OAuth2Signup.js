import React from "react";

import googleLogo from "../../assets/img/google-logo.png";
import {GOOGLE_AUTH_URL} from "../../constants";
import {Link} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const OAuth2Signup = () => (
    <Button variant='outlined' color='primary' component={Link} underline={"none"} href={GOOGLE_AUTH_URL}>
        <img height='25px' src={googleLogo} alt="Google"/> Zaloguj przez Google
    </Button>
);

export default OAuth2Signup;
