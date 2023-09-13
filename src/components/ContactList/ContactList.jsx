import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterField = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterField.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </List>
  );
};
