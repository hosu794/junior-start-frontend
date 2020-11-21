import React from 'react'

import googleLogo from '../../assets/img/google-logo.png'
import fbLogo from '../../assets/img/fb-logo.png'
import githubLogo from '../../assets/img/github-logo.png'
import { FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from '../../constants';

const OAuth2Signin = () => (
    <div className="social-login">
        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
            <img src={googleLogo} alt="Google" /> Log in with Google</a>

    </div>
);


export default OAuth2Signin;