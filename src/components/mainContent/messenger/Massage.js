import React, {Component} from "react";
import {Content, MessageLayout, Time} from "../../../styles/messengerStyles";

const user = {
    id: 3,
    name: 'User'
}

class Message extends Component {

    isMessageOutcoming() {
        return this.props.message.senderId === user.id;
    }

    render() {
        const {message} = this.props;
        return (
            <MessageLayout style={this.isMessageOutcoming() ? {flexDirection: 'row-reverse'} : {}}>
                <Content>
                    {message.content}
                </Content>
                <Time>
                    {message.timestamp}
                </Time>
            </MessageLayout>
        );
    }
}

export default Message;