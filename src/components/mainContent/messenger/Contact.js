import React, {Component} from 'react';
import {ContactLayout, Name} from "../../../styles/messengerStyles";

class Contact extends Component {
    render() {
        return (
            <ContactLayout>
                <Name>{this.props.name}</Name>
            </ContactLayout>
        );
    }
}

export default Contact;
