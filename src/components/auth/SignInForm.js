import React, {Component} from "react";
import {Formik} from "formik";
import Button from "@material-ui/core/Button";
import {CustomCheckboxWithLabel, TextInput} from "../common/customInputs";
import {StyledAuthForm, StyledForm} from "../../styles/formStyles";

class SignInForm extends Component {

    render() {
        return (
            <StyledAuthForm>
                <h3>Zaloguj się</h3>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        staySignedIn: false
                    }}
                    onSubmit={(values, {setSubmitting}) => {
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
}

export default SignInForm;