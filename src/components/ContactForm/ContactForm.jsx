import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FormThumb } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Wrong name format'
    )
    .required('Must be filled'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Wrong number format'
    )
    .required('Must be filled'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onAddContact = newContact => {
    // newContact.preventDefault();
    const enteredName = newContact.name;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === enteredName.toLowerCase()
      )
    ) {
      alert(`${enteredName} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    // setContacts(prev => [...prev, newContact]);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        onAddContact({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <FormThumb>
        <label>
          Name
          <Field name="name" placeholder="Enter name" />
          <ErrorMessage name="name" component="b" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Enter number" />
          <ErrorMessage name="number" component="b" />
        </label>

        <button type="submit">Add contact</button>
      </FormThumb>
    </Formik>
  );
};
