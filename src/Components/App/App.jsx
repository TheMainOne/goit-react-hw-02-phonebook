import React, { Component } from "react";
import { nanoid } from "nanoid";
import Contacts from "../Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  onHandleSubmit = (event) => {
    const form = event.target;
    const contactName = event.target[0].value;
    const contactPhone = event.target[1].value;
    event.preventDefault();

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
        <div className="phonebook">
          <form onSubmit={this.onHandleSubmit}>
            <label>
              write your name here
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              write your phone here
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">add contact</button>
          </form>
        </div>
        <div className="contacts">
          <input
            type="text"
            value={this.state.filter}
            onChange={this.onSearchInput}
          />

          <Contacts contacts={this.state.contacts} filteredContacts={filteredContacts}></Contacts>
        </div>
      </>
    );
  }
}

export default App;
