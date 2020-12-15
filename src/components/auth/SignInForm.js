import React, {useEffect} from "react";
import {Formik} from "formik";
import Button from "@material-ui/core/Button";
import {CustomCheckboxWithLabel, TextInput} from "../common";
import {useDispatch, useSelector} from "react-redux";
import {authenticationActions} from "../../actions";
import {loginValidationSchema} from "../../utils/validation";
import {LoginFailureAlertStyles} from "../../styles/alertStyles";
import OAuth2Signin from "../../components/oauth2/OAuth2Signin";
import {authenticationErrorSelector} from "../../selectors";
import Grid from "@material-ui/core/Grid";
import {Divider, Typography} from "@material-ui/core";

const SignInForm = () => {
    const dispatch = useDispatch();
    const authenticationError = useSelector(authenticationErrorSelector);

    useEffect(() => {
        dispatch(authenticationActions.clearError());
    }, [dispatch]);

    function signIn(email, password) {
        dispatch(authenticationActions.signIn({email, password}));
    }

    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
                <Typography variant={"h6"}>Zaloguj się</Typography>
            </Grid>
            <Grid item>
                <Divider/>
            </Grid>
            <Grid item>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        staySignedIn: false,
                    }}
                    validationSchema={loginValidationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        signIn(values.email, values.password);
                    }}
                >
                    <Grid container direction={"column"} spacing={1}>
                        <Grid item container direction={"column"}>
                            <TextInput
                                label="Adres email"
                                name="email"
                                type="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item container direction={"column"}>
                            <TextInput
                                label="Hasło"
                                variant="outlined"
                                name="password"
                                type="password"
                            />
                        </Grid>
                        <Grid item>
                            <CustomCheckboxWithLabel
                                name="staySignedIn"
                                color="primary"
                                label="Nie wylogowuj mnie"
                            />
                        </Grid>
                        <Grid item container direction={"column"}>
                            <Button type="submit" variant="contained" color="primary">
                                Zaloguj
                            </Button>
                            {authenticationError ? (
                                <LoginFailureAlertStyles>
                                    Nieprawidłowy login lub hasło. Spróbuj ponownie.
                                </LoginFailureAlertStyles>
                            ) : null}
                        </Grid>
                        <Grid item container justify={"center"}>
                            lub
                        </Grid>
                        <Grid item container justify={"center"}>
                            <OAuth2Signin/>
                        </Grid>
                    </Grid>
                </Formik>
            </Grid>
        </Grid>
    );
};

export default SignInForm;
