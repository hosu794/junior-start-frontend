import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import {IconButton} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Messages from "./Messages";
import {ConversationLayout, Header, MobileOnly} from "../../../styles/messengerStyles";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {Link} from "react-router-dom";

const messagesDb = [
    {
        id: 1,
        senderId: 3,
        senderName: "User",
        recipientId: 2,
        recipientName: "Jan Kowalski",
        timestamp: '11:05',
        content: 'Wiadomość wychodzącaLorem ipsum lorem ipsum'
    },
    {
        id: 2,
        senderId: 2,
        senderName: "Jan Kowalski",
        recipientId: 3,
        recipientName: "User",
        timestamp: '10:59',
        content: 'Wiadomość przychodząca Lorem ipsum lorem ipsum'
    }
];

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComponentReady: false
        }
    }


    //to be deleted after implementing server functionality
    fetchMessages(userId, contactId) {
        return new Promise((resolve, reject) => {
            resolve(messagesDb);
            reject(new Error("Nie udało się pobrać wiadomości"))
        })
    }

    getMessages = (userId, contactId) => {
        this.fetchMessages(userId, contactId)
            .then(response => {
                this.setState({
                    messages: response,
                    isComponentReady: true
                });
            })
            .catch(error => {
                alert(error);
            })
    }

    componentDidMount() {
        this.getMessages(1, 2);
    }

    render() {
        const {contact} = this.props;
        const {isComponentReady, messages} = this.state;
        return (
            isComponentReady &&
            <ConversationLayout id='conversation'>
                <Header>
                    <h3>{contact.name}</h3>
                    <MobileOnly>
                        <IconButton size='small' component={Link} to='/wiadomosci/kontakty'>
                            <RecentActorsIcon fontSize='large'/>
                        </IconButton>
                    </MobileOnly>
                </Header>
                <Messages messages={messages}/>
                <Paper component='form' style={{display: 'flex'}}>
                    <InputBase multiline fullWidth/>
                    <IconButton size='small'>
                        <SendIcon fontSize='small' color='primary'/>
                    </IconButton>
                </Paper>
            </ConversationLayout>
        );
    }
}

export default Conversation;