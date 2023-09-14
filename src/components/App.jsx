import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import { GlobalStyle, Box } from './GlobalStyle';

export const App = () => {
  const contacts = useSelector(getContacts);
  const contactsLength = contacts.length;

  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {contactsLength === 0 ? (
        <Message message="Oops! Contact's list is empty..." />
      ) : (
        <ContactList />
      )}

      <GlobalStyle />
    </Box>
  );
};
