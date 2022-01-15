import React, { Component } from "react";
import { nanoid } from "nanoid";
import Contacts from "../Contacts/Contacts";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onHandleSubmit = (event) => {
    const form = event.target;
    const contactName = event.target[0].value;
    const contactPhone = event.target[1].value;
    const isNameInContacts = this.state.contacts.find(
      element => element.name === contactName);
    event.preventDefault();

    if (isNameInContacts) {
      alert(`${contactName} is already in contacts`);
      form.reset();
      return;
    }


    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: contactName, number: contactPhone },
        ],
      };
    });

    form.reset();
  };

  onSearchInput = (event) => {
    const inputValue = event.target.value;

    this.setState({ filter: inputValue });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.onHandleSubmit} />
        <h2>Contacts</h2>
        <Filter onSearchInput={this.onSearchInput} value={this.state.filter} />
        <Contacts
          contacts={this.state.contacts}
          filteredContacts={filteredContacts}
        />
      </>
    );
  }
}

export default App;
