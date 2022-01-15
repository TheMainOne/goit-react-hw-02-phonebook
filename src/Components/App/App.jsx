import React, { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  };

  handleSubmit = (event) => {
    const form = event.target;
    const contactName = event.target[0].value;
    const contactPhone = event.target[1].value
    event.preventDefault();

    this.setState(prevState => {
      console.log(prevState);
      return { contacts: [...prevState.contacts, { name: contactName, number: contactPhone }] }
    }); 
    
    console.log(this);
    form.reset();
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <div className="phonebook">
          <form onSubmit={this.handleSubmit}>
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
          <ul>
            {this.state.contacts
              ? this.state.contacts.map(({name, number}) => (
                <li key={nanoid()}>{name}: {number} </li>
                ))
              : false}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
