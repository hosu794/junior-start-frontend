import React, { useEffect } from "react";
import Layout from "./styles/Layout";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/mainContent/MainContent";
import RightMenu from "./components/rightMenu/RightMenu";
import Footer from "./components/footer/Footer";
import Divider from "@material-ui/core/Divider";
import { ContentLayout } from "./styles/contentStyles";
import { history } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { userActions, alertActions } from "./actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftMenu from "./components/leftMenu/LeftMenu";
import { ContentGrid } from "./styles/contentStyles";
import PropTypes from "prop-types";
import OAuth2RedirectHandler from "./components/oauth2/OAuth2RedirectHandler";
import { loggedInSelector } from "./selectors";
import ProjectComponent from "./components/project/ProjectComponent";
import ProjectCreate from "./components/project/ProjectCreate";
import { PrivateRoute } from "./routes";
import ProjectUpdate from "./components/project/ProjectUpdate";

import MessengerPage from "./components/mainContent/messenger/MessengerPage";
import AccountSettingsPage from "./components/accountPage/AccountSettingsPage";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";

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
        <Navbar />
        <ContentGrid container>
          <Grid item xs>
            <Switch>
              <Route
                path="/profile"
                component={() => <div>Profile</div>}
                exact
              />
              <Route exact component={MainContent} path="/" />
              <Route exact component={MessengerPage} path="/wiadomosci" />
              <Route
                exact
                component={AccountSettingsPage}
                path="/moje-konto/ustawienia"
              />
              <Route path="/project/:id" component={ProjectComponent} exact />
              <PrivateRoute
                path="/project/update/:id"
                component={ProjectUpdate}
                exact
              />
              <PrivateRoute path="/create/project" component={ProjectCreate} />
              <Route
                path="/oauth2/redirect"
                component={OAuth2RedirectHandler}
              />
            </Switch>
          </Grid>
          <Hidden only="xs">
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3} sm={4} md={3} xl={2}>
              <RightMenu />
            </Grid>
          </Hidden>
        </ContentGrid>
        <Divider />
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;

App.propTypes = {
  alert: PropTypes.object,
  loggedIn: PropTypes.bool,
};
