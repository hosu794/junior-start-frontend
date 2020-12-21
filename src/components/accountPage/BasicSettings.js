import React from 'react';
import {List, ListSubheader} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

const BasicSettings = () => {
    return (
        <List dense disablePadding>
            <ListSubheader disableGutters color="inherit">
                Podstawowe
            </ListSubheader>
            <ListItem>
                <ListItemText primary="Ustawienie 1"/>
                <ListItemSecondaryAction>
                    <Switch color="primary"/>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemText primary="Ustawienie 2"/>
                <ListItemSecondaryAction>
                    <Switch color="primary"/>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemText primary="Ustawienie 3"/>
                <ListItemSecondaryAction>
                    <Switch color="primary"/>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
};

export default BasicSettings;
