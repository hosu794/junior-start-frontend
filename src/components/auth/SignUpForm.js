import React from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { CustomCheckboxWithLabel, TextInput } from "../common";
import { StyledAuthForm, StyledForm } from "../../styles/formStyles";
import { registerValidationSchema } from "../../utils/validation";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../actions";
import OAuth2Signup from "../oauth2/OAuth2Signup";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signUp = async (username, email, password) => {
    await dispatch(authenticationActions.signUp({ username, email, password }));
    await history.go(0);
  };

  return (
    <StyledAuthForm id="form">
      <h3>Zarejestruj się</h3>
      <Formik
        initialValues={{
          username: "",
          password: "",
          passwordConfirm: "",
          email: "",
          acceptedTerms: false,
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          signUp(values.username, values.email, values.password);
          setSubmitting(false);
        }}
      >
        <StyledForm>
          <TextInput
            label="Nazwa użytkownika"
            variant="outlined"
            name="username"
            type="text"
          />
          <TextInput
            label="E-mail"
            variant="outlined"
            name="email"
            type="email"
          />
          <TextInput
            label="Hasło"
            variant="outlined"
            name="password"
            type="password"
          />
          <TextInput
            label="Potwierdź hasło"
            variant="outlined"
            name="passwordConfirm"
            type="password"
          />
          <CustomCheckboxWithLabel
            name="acceptedTerms"
            color="primary"
            label="Akceptuję regulamin"
          />
          <Button type="submit" variant="contained" color="primary">
            Zarejestruj
          </Button>
        </StyledForm>
      </Formik>
      <OAuth2Signup />
    </StyledAuthForm>
  );
};

export default SignUpForm;
