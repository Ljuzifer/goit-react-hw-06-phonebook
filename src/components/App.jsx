import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle, Box } from './GlobalStyle';
import { Message } from './Message/Message';

const LOCAL_STORAGE_KEY = 'contacts-list';

const updateFromLocalStorage = () => {
  const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const parsedContacts = JSON.parse(savedContacts);

  if (parsedContacts !== null) {
    return parsedContacts;
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(updateFromLocalStorage);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    const enteredName = newContact.name;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === enteredName.toLowerCase()
      )
    ) {
      alert(`${enteredName} is already in contacts.`);
      return;
    }

    setContacts(prev => [...prev, newContact]);
  };

  const handleChangeFilter = newSymbol => {
    setFilter(newSymbol);
  };

  const handleContactDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactsLength = contacts.length;

  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter nameFilter={filter} onChange={handleChangeFilter} />
      {contactsLength === 0 ? (
        <Message message="Oops! Contact's list is empty..." />
      ) : (
        <ContactList
          contacts={filteredContacts()}
          contactDelete={handleContactDelete}
        />
      )}

      <GlobalStyle />
    </Box>
  );
};
