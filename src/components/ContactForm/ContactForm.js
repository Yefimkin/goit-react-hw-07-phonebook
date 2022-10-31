import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from '../../redux/ContactsSlice';
import Button from '../Button/Button';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        setName('')
        setNumber('')
    }
  };


  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const contactIsExist = (name, number) => {
    return contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase() || item.number === number);
  }

  const addContacts = (name, number) => {
    if (contactIsExist(name, number)) {
      return alert(`${name} ${number} is already in Phonebook`);
    }
    dispatch(addContact({ name, number }));
  }

  const onFormSubmit = e => {
    e.preventDefault();
    addContacts(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label className={s.form}>
        <p>Name</p>
        <input
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={s.input}
        />
        <p>Number</p>
        <input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={s.input}
        />
        <Button
          text="Add Contact"
          type="submit"
          disabled={number && name ? false : true}
        />
      </label>
    </form>
  );
}

export default ContactForm;