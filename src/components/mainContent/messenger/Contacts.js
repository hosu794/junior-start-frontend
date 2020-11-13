import React, {Component} from "react";
import Contact from "./Contact";
import {ContactsLayout} from "../../../styles/messengerStyles";

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
                <h3>Kontakty</h3>
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
