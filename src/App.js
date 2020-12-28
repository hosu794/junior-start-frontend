import React, {useEffect} from 'react';
import Layout from "./styles/Layout";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/mainContent/MainContent";
import RightMenu from "./components/rightMenu/RightMenu";
import Footer from "./components/footer/Footer";
import Divider from "@material-ui/core/Divider";
import {ContentGrid} from "./styles/contentStyles";
import {history} from "./utils";
import {useDispatch, useSelector} from "react-redux";
import {alertActions, userActions} from "./actions";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import OAuth2RedirectHandler from "./components/oauth2/OAuth2RedirectHandler";
import {loggedInSelector} from "./selectors";
import MessengerPage from "./components/mainContent/messenger/MessengerPage";
import AccountSettingsPage from "./components/accountPage/AccountSettingsPage";
import Grid from "@material-ui/core/Grid";
import {Hidden} from "@material-ui/core";

function App() {
    const loggedIn = useSelector(loggedInSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getCurrentUser());
        history.listen(function (location, action) {
            dispatch(alertActions.clear());
        });
    }, [dispatch, loggedIn]);

    return (
        <Router>
            <Layout>
                <Navbar/>
                <ContentGrid container>
                    <Grid item xs>
                        <Switch>
                            <Route path="/profile" component={() => <div>Profile</div>} exact/>
                            <Route exact component={MainContent} path="/"/>
                            <Route exact component={MessengerPage} path="/wiadomosci"/>
                            <Route exact component={AccountSettingsPage} path="/moje-konto/ustawienia"/>
                            <Route
                                path="/oauth2/redirect"
                                component={OAuth2RedirectHandler}
                            />
                        </Switch>
                    </Grid>
                    <Hidden only="xs">
                        <Divider orientation="vertical" flexItem/>
                        <Grid item xs={3} sm={4} md={3} xl={2}>
                            <RightMenu/>
                        </Grid>
                    </Hidden>
                </ContentGrid>
                <Divider/>
                <Footer/>
            </Layout>
        </Router>
    );
}

export default App;

App.propTypes = {
    alert: PropTypes.object,
    loggedIn: PropTypes.bool,
};
