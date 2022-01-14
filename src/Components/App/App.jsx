import React, { Component } from "react";
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: ""
  };

  handleSubmit = (event) => {
    const form = event.target;
    const valueOfInput = event.target[0].value;
    event.preventDefault();
    
    this.setState({ contacts: [...this.state.contacts, valueOfInput] })
    console.log(this.state);
    form.reset();
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <div className="phonebook">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">add contact</button>
          </form>
        </div>
        <div className="contacts">
          <ul>
            {this.state.contacts ? this.state.contacts.map(contact => <li key={nanoid()}>{contact}</li>) : false}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
