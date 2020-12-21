import React, {useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import {List, ListSubheader} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PasswordChangeDialog from "./PasswordChangeDialog";

const PasswordSettings = () => {
    const [dialog, setDialog] = useState(false);

    const handleDialog = () => {
        setDialog(!dialog);
    }

    return (
        <List>
            <ListSubheader disableGutters color="inherit">
                Hasło
            </ListSubheader>
            <ListItem>
                <Button variant={"contained"} color={"primary"} onClick={handleDialog}>
                    Zmień hasło
                </Button>
            </ListItem>
            <PasswordChangeDialog dialog={dialog} handleDialog={handleDialog}/>
        </List>
    );
};

export default PasswordSettings;
