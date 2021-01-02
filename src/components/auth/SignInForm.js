import React, { useEffect } from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { CustomCheckboxWithLabel, TextInput } from "../common";
import { StyledAuthForm, StyledForm } from "../../styles/formStyles";
import { useDispatch, useSelector } from "react-redux";
import { authenticationActions } from "../../actions";
import { loginValidationSchema } from "../../utils/validation";
import { LoginFailureAlertStyles } from "../../styles/alertStyles";
import OAuth2Signin from "../../components/oauth2/OAuth2Signin";
import { authenticationErrorSelector } from "../../selectors";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const authenticationError = useSelector(authenticationErrorSelector);
  const history = useHistory();
  useEffect(() => {
    dispatch(authenticationActions.clearError());
  }, [dispatch]);

  const signIn = async (email, password) => {
    await dispatch(authenticationActions.signIn({ email, password }));
    await history.go(0);
  };

  return (
    <StyledAuthForm>
      <h3>Zaloguj się</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
          staySignedIn: false,
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          signIn(values.email, values.password);
        }}
      >
        <StyledForm>
          <TextInput
            label="Adres email"
            name="email"
            type="email"
            variant="outlined"
          />
          <TextInput
            label="Hasło"
            variant="outlined"
            name="password"
            type="password"
          />
          <CustomCheckboxWithLabel
            name="staySignedIn"
            color="primary"
            label="Nie wylogowuj mnie"
          />
          <Button type="submit" variant="contained" color="primary">
            Zaloguj
          </Button>
          {authenticationError ? (
            <LoginFailureAlertStyles>
              Nieprawidłowy login lub hasło. Spróbuj ponownie.
            </LoginFailureAlertStyles>
          ) : null}
        </StyledForm>
      </Formik>
      <OAuth2Signin />
    </StyledAuthForm>
  );
};

export default SignInForm;
