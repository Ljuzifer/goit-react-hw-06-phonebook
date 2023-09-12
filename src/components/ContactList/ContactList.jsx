import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, contactDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem details={contact} onDelete={contactDelete} />
        </li>
      ))}
    </List>
  );
};
