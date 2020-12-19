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
import PropTypes from "prop-types";
import OAuth2RedirectHandler from "./components/oauth2/OAuth2RedirectHandler";
import { loggedInSelector } from "./selectors";
import ProjectComponent from "./components/project/ProjectComponent";
import ProjectCreate from "./components/project/ProjectCreate";
import { PrivateRoute } from "./routes";
import ProjectUpdate from "./components/project/ProjectUpdate";

import MessengerPage from "./components/mainContent/messenger/MessengerPage";

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
    <Router history={history}>
      <Layout>
        <Navbar />
        <ContentLayout>
          <LeftMenu />
          <Divider orientation="vertical" flexItem />
          <Switch>
            <Route path="/profile" component={() => <div>Profile</div>} exact />
            <Route exact component={MainContent} path="/" />
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
            <Route path="/project/:id" component={ProjectComponent} exact />
            <PrivateRoute
              path="/project/update/:id"
              component={ProjectUpdate}
              exact
            />
            <Route exact component={MessengerPage} path="/wiadomosci" />
            <PrivateRoute path="/create/project" component={ProjectCreate} />
          </Switch>
          <Divider orientation="vertical" flexItem />
          <RightMenu />
        </ContentLayout>
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
