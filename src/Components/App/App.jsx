import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

    stateContactsChange = (event) => {
      event.preventDefault();
    console.log(event);
    console.log(this.props);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <div className="phonebook">
          <form>
            <label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button onSubmit={this.stateContactsChange} type="submit">add contact</button>
          </form>
        </div>
        <div className="contacts"></div>
      </>
    );
  }
}

export default App;
