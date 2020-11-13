import React, {Component} from "react";
import {MessagesLayout} from "../../../styles/messengerStyles";
import Message from "./Massage";

class Messages extends Component {

    render() {
        const {messages} = this.props;
        return (
            <MessagesLayout>
                {
                    messages.length !== 0 && messages.map(message => (
                        <Message key={message.id} message={message}/>
                    ))
                }
            </MessagesLayout>
        );
    }
}

export default Messages;
