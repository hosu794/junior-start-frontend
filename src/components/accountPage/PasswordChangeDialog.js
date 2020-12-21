import React, {useState} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import {Form, Formik} from "formik";
import {passwordValidationSchema} from "../../utils/validation/passwordChangeValidationSchema";
import Grid from "@material-ui/core/Grid";
import {TextInput} from "../common";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

const PasswordChangeDialog = (props) => {

    const [showAlert, setShowAlert] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [disableForm, setDisableForm] = useState(false);

    const handleSubmit = (values) => {
        setDisableForm(true);
        setDisableButton(true);
        setShowProgress(true);
        /** Api connection simulation **/
        setTimeout(() => {
            props.handleDialog();
            handleAlert();
        }, 1500);
    };
    const handleAlert = () => {
        setShowAlert(!showAlert);
    }

    return (
        <>
            <Dialog open={props.dialog} onClose={props.handleDialog}>
                <Formik
                    initialValues={{
                        oldPassword: '',
                        newPassword: '',
                        newPasswordConfirm: ''
                    }}
                    validationSchema={passwordValidationSchema}
                    onSubmit={values => {
                        handleSubmit(values);
                    }}
                >
                    <Form>
                        <DialogContent>
                            <DialogTitle>
                                Zmień hasło
                            </DialogTitle>
                            <Grid container direction={"column"} spacing={1}>
                                <Grid item container direction={"column"}>
                                    <TextInput
                                        label="Stare hasło"
                                        variant="outlined"
                                        name="oldPassword"
                                        type="password"
                                        disabled={disableForm}
                                    />
                                </Grid>
                                <Grid item container direction={"column"}>
                                    <TextInput
                                        label="Nowe hasło"
                                        variant="outlined"
                                        name="newPassword"
                                        type="password"
                                        disabled={disableForm}
                                    />
                                </Grid>
                                <Grid item container direction={"column"}>
                                    <TextInput
                                        label="Potwierdź hasło"
                                        variant="outlined"
                                        name="newPasswordConfirm"
                                        type="password"
                                        disabled={disableForm}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            {
                                showProgress &&
                                <CircularProgress color="primary" size={30}/>
                            }
                            <Button type="submit" variant="contained" color="primary" disabled={disableButton}>
                                Zmień hasło
                            </Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
            <Snackbar open={showAlert} autoHideDuration={3000} onClose={handleAlert}>
                <Alert onClose={handleAlert} severity="success">
                    Hasło zostało zmienione
                </Alert>
            </Snackbar>
        </>
    );
};

export default PasswordChangeDialog;
