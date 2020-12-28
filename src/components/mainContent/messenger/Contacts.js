import React, {Component} from "react";
import Contact from "./Contact";
import {ContactsLayout, ContactsTitle} from "../../../styles/messengerStyles";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Box from "@material-ui/core/Box";

const contacts = [
    {
        name: "Jan Kowalski",
        id: 1
    },
    {
        name: "Piotr Nowak",
        id: 2
    }
]

class Contacts extends Component {

    contacts = [];

    fetchContacts() {
        return new Promise(((resolve, reject) => {
            resolve(contacts);
            reject(new Error("Nie udało się pobrać kontaktów"))
        }))
    }

    getContacts = () => {
        this.fetchContacts()
            .then(response => {
                this.contacts = response;
            })
            .catch(error => alert(error));
    }

    componentDidMount() {
        this.getContacts();
    }

    render() {
        return (
            <ContactsLayout id='contacts'>
                <ContactsTitle>
                    <RecentActorsIcon/>
                    <Box mx={1} my='auto'>
                        <h3>Kontakty</h3>
                    </Box>
                </ContactsTitle>
                {
                    contacts.length !== 0 && contacts.map(contact => (
                        <Contact key={contact.id} name={contact.name}/>
                    ))
                }
            </ContactsLayout>
        );
    }
}

export default Contacts;
