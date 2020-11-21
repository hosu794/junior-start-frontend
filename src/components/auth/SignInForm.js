import React, { Component, useEffect } from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { CustomCheckboxWithLabel, TextInput } from "../common/customInputs";
import { StyledAuthForm, StyledForm } from "../../styles/formStyles";
import { useDispatch, useSelector } from 'react-redux'
import { authenticationActions } from "../../actions";
import * as Yup from 'yup'
import { loginValidationSchema } from '../../utils/validation'

const SignInForm = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authentication.loading);
    const auth = useSelector((state) => state.authentication);

    useEffect(() => {
        dispatch(authenticationActions.clearError())
    }, []);

    function login(username, password) {
        dispatch(authenticationActions.login({ username, password }))
    }

    return (
        <StyledAuthForm>
            <h3>Zaloguj się</h3>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    staySignedIn: false
                }}
                validationSchema={loginValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                }}>
                <StyledForm>
                    <TextInput
                        label="Nazwa użytkownika"
                        name="username"
                        type="text"
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Zaloguj
                    </Button>
                </StyledForm>
            </Formik>
        </StyledAuthForm>
    );
}

export default SignInForm;