import React from "react";
import { List } from "./Contacts.styled";
import { Button } from "./Contacts.styled";

const Contacts = ({ contacts, filteredContacts, deleteContact }) => {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts added yet</p>
      ) : (
        <List>
          {filteredContacts.length === 0 ? (
            <p>Contact not found</p>
          ) : (
            filteredContacts.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <Button onClick={() => deleteContact(contact.id)}>delete</Button>
              </li>
            ))
          )}
        </List>
      )}
    </div>
  );
}

export default Contacts;