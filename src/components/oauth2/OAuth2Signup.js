import React from "react";

import googleLogo from "../../assets/img/google-logo.png";
import { GOOGLE_AUTH_URL } from "../../constants";

const OAuth2Signup = () => (
  <div className="social-signup">
    <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
      <img src={googleLogo} alt="Google" /> Sign up with Google
    </a>
  </div>
);

export default OAuth2Signup;
