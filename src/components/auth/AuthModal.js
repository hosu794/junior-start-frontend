import React, {useState} from "react";
import SignInForm from "./SignInForm";
import {Grid, Link} from "@material-ui/core";
import SignUpForm from "./SignUpForm";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const AuthModal = () => {

    const [formType, setFormType] = useState('signIn');

    const handleFormType = (type) => {
        setFormType(type);
    }

    return (
        <Paper tabIndex={-1}>
            <Box p={2}>
                {
                    formType === 'signIn' ?
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <SignInForm/>
                            </Grid>
                            <Grid item container direction='row' justify={"center"}>
                                <Box mr={1}>
                                    <Typography variant='body2'>
                                        Nie masz jeszcze konta?
                                    </Typography>
                                </Box>
                                <Typography variant='body2'>
                                    <Link component={"button"} onClick={() => handleFormType('signUp')}>
                                        Zarejestruj się
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        :
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <SignUpForm/>
                            </Grid>
                            <Grid item container direction='row' justify={"center"}>
                                <Box mr={1}>
                                    <Typography variant='body2'>
                                        Masz już konto?
                                    </Typography>
                                </Box>
                                <Typography variant='body2'>
                                    <Link component={"button"} onClick={() => handleFormType('signIn')}>
                                        Zaloguj się
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                }
            </Box>
        </Paper>
    );
};

export default AuthModal;
