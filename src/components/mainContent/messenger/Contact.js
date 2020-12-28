import React, {Component} from 'react';
import {ContactLayout, Name} from "../../../styles/messengerStyles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <ContactLayout component={Link} to='/wiadomosci'>
                <AccountCircleIcon/>
                <Name>{this.props.name}</Name>
            </ContactLayout>
        );
    }
}

export default Contact;
