import React, {Component} from 'react';
import Contacts from "./Contacts";
import Conversation from "./Conversation";
import {Divider} from "@material-ui/core";
import {DesktopOnly, MessengerPageLayout} from "../../../styles/messengerStyles";


class MessengerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoContact: {
                name: 'Jan Kowalski',
                id: '1'
            },
            isComponentReady: true
        }
    }

    render() {
        const {demoContact, isComponentReady} = this.state;
        return (
            isComponentReady &&
            <MessengerPageLayout id='messenger-page'>
                <DesktopOnly>
                    <Contacts/>
                    <Divider orientation="vertical" flexItem/>
                </DesktopOnly>
                <Conversation contact={demoContact}/>
            </MessengerPageLayout>
        );
    }
}

export default MessengerPage;