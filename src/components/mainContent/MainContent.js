import React, {Component} from "react";
import {MainContentLayout} from "../../styles/mainContentStyles";
import {Route, Switch} from "react-router-dom";
import PostsPage from "./posts/PostsPage";
import MessengerPage from "./messenger/MessengerPage";

class MainContent extends Component {
    render() {
        return (
            <MainContentLayout>
                <Switch>
                    <Route exact path='/' component={PostsPage}/>
                    <Route exact path='/wiadomosci/' component={MessengerPage}/>
                </Switch>
            </MainContentLayout>
        );
    }
}

export default MainContent;
