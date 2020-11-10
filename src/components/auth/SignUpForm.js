import React, {Component} from "react";
import {Formik} from "formik";
import Button from "@material-ui/core/Button";
import {CustomCheckboxWithLabel, TextInput} from "../common/customInputs";
import {StyledAuthForm, StyledForm} from "../../styles/formStyles";
import * as Yup from 'yup';

class SignUpForm extends Component {

    render() {
        return (
            <StyledAuthForm id='form'>
                <h3>Zarejestruj się</h3>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        passwordConfirm: '',
                        email: '',
                        acceptedTerms: false
                    }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .min(3, "Wpisz co najmniej 3 znaki")
                            .required('Wymagane'),
                        password: Yup.string()
                            .min(8, "Hasło musi składać się z conajmniej 8 znaków")
                            .required('Wymagane'),
                        passwordConfirm: Yup.string()
                            .oneOf([Yup.ref('password'), null], "Hasła muszą być identyczne")
                            .required('Wymagane'),
                        email: Yup.string()
                            .email('Niepoprawny adres e-mail')
                            .required('Wymagane'),
                        acceptedTerms: Yup.boolean()
                            .required('Wymagane')
                            .oneOf([true], 'Musisz zaakceptować regulamin'),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                        setSubmitting(false)
                    }}>
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Zarejestruj
                        </Button>
                    </StyledForm>
                </Formik>
            </StyledAuthForm>
        );
    }
}

export default SignUpForm;