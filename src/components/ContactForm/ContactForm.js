import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { addContact } from 'redux/asyncThunk';
import { nanoid } from 'nanoid'
import Button from '../Button/Button';
import style from './ContactForm.module.css';
import { Loader } from '../Loader/Loader';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
          default:
        }
    }

    const dispatch = useDispatch();
    const {items, addingLoader} = useSelector(getContacts);

    const contactAlreadyExists = (name, number) => {
        return items.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase() || item.number === number);
    }

    const addContactToList = (id, name, number) => {
        if (contactAlreadyExists(name, number)) {
            return alert(`${name} ${number} is already in Phonebook`)
        }

        dispatch(addContact({ id, name, number }));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        addContactToList(nanoid(), name, number);

        setName('')
        setNumber('')
    }

    const nameId = nanoid();
    const numberId = nanoid();


// function ContactForm() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleInputChange = ({ currentTarget: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//     }
//   };

//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   const contactIsExist = (name, number) => {
//     return contacts.find((contacts) => contacts.name.toLocaleLowerCase() === name.toLocaleLowerCase() || contacts.number === number);
//   }

//   const addContacts = (name, number) => {
//     if (contactIsExist(name, number)) {
//       return alert(`${name} ${number} is already in Phonebook`);
//     }
//     dispatch(addContact({ name, number }));
//       setName('');
//       setNumber('');
//   }

//   const onFormSubmit = e => {
//     e.preventDefault();
//     addContacts(name, number);
    
//   };

//   const nameId = nanoid();
//   const numberId = nanoid();

  return (
    <form onSubmit={onFormSubmit}>
      <label className={style.form} htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={style.input}
        />
        <label htmlFor={numberId}>Number</label>
        <input
          id={numberId}
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={style.input}
      />
      {addingLoader ?
        <Loader /> :
        <Button
          text="Add Contact"
          type="submit"
          disabled={number && name ? false : true}
        />
      }
    </form>
  );
}

export default ContactForm;