import React from 'react';
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SettingsIcon from '@material-ui/icons/Settings';
import BasicSettings from "./BasicSettings";
import NotificationsSettings from "./NotificationsSettings";
import PasswordSettings from "./PasswordSettings";
import {useSelector} from "react-redux";
import {currrentUserSelector} from "../../selectors";
import {Redirect} from "react-router-dom";

const AccountSettingsPage = () => {
    const user = useSelector(currrentUserSelector);

    return (
        user ?
            <Paper>
                <Grid container component={Box} p={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            <SettingsIcon fontSize="inherit"/>
                            Ustawienia konta
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <BasicSettings/>
                    </Grid>
                    <Grid item xs={12}>
                        <NotificationsSettings/>
                    </Grid>
                    <Grid item xs={12}>
                        <PasswordSettings/>
                    </Grid>
                </Grid>
            </Paper>
            :
            <Redirect to=""/>
    );
};

export default AccountSettingsPage;
