import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {LogoLayout} from "../../styles/navbarStyles";
import AuthModal from "../auth/AuthModal";
import {CenteredModal} from "../../styles/modalStyles";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {authenticationActions} from "../../actions";
import {currrentUserSelector} from "../../selectors";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";

const Navbar = () => {
    const [modal, setModal] = useState(false);
    const [drawer, setDrawer] = useState(false);

    const user = useSelector(currrentUserSelector);
    const dispatch = useDispatch();

    function handleModal() {
        setModal(!modal);
    }

    function logout() {
        dispatch(authenticationActions.logout());
        dispatch(authenticationActions.logoutAuth02token());
    }

    function handleDrawer() {
        setDrawer(!drawer);
    }

    return (
        <>
            <AppBar position="sticky">
                <Toolbar variant='dense' disableGutters>
                    <IconButton color='primary' onClick={handleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <LogoLayout component={Link} to='/'>Junior start</LogoLayout>
                    <Box mr={1}>
                        {
                            !user ?
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleModal}
                                >
                                    Zaloguj
                                </Button>
                                :
                                <div>
                                    <IconButton component={Link} to='/wiadomosci' color='primary'>
                                        <Badge badgeContent={4} color="primary">
                                            <MailIcon/>
                                        </Badge>
                                    </IconButton>
                                    <Button variant="outlined" color="primary">
                                        {user.email}
                                    </Button>
                                    <Button variant="contained" onClick={logout} color="primary">
                                        Wyloguj się
                                    </Button>
                                </div>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={drawer} onClose={handleDrawer}>
                <div>
                    <IconButton onClick={handleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                </div>
                <List>
                    {['Code Review', 'Projekty', 'Ogłoszenia o prace', 'Mentorzy', 'Forum'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <CenteredModal
                open={modal}
                onClose={handleModal}
            >
                <AuthModal/>
            </CenteredModal>
        </>
    );
}

Navbar.propTypes = {
    user: PropTypes.object,
};

export default Navbar;