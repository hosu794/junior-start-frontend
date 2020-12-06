import React from "react";
import SignInForm from "./SignInForm";
import { Divider } from "@material-ui/core";
import SignUpForm from "./SignUpForm";
import { CustomPaper } from "../../styles/paperStyles";

const AuthModal = () => (
  <CustomPaper tabIndex={-1}>
    <SignInForm />
    <Divider orientation="vertical" flexItem />
    <SignUpForm />
  </CustomPaper>
);

export default AuthModal;
