import React from "react";

const Contacts = ({ contacts, filteredContacts }) => {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts added yet</p>
      ) : (
        <ul>
          {filteredContacts.length === 0 ? (
            <p>Contact not found</p>
          ) : (
            filteredContacts.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default Contacts;