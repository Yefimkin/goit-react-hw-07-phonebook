import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsApi';
import styles from './ContactForm.module.css'


export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const { data: contacts } = useGetContactsQuery();
    const [addContact] = useAddContactMutation();


    const createContact = async user => {
        await addContact(user);
    };


    const AddContact = name => {
        const isValidate = contacts.find(item => item.name === name);
        isValidate && alert(`${name} is already in contacts`);
        return isValidate;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const isValidate = AddContact(name);
        // resetForm();
        if (isValidate) return;
        createContact({ name, number });
        // resetForm();
    };

    const handleChange = evt => {
        const { name } = evt.currentTarget;
        const { value } = evt.currentTarget;

        switch (name) {
            case "name":
                setName(value);
                break;
            
            case "number":
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    // const resetForm = () => {
    //     setName('');
    //     setNumber('');
    // }
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Name
                      <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        className={styles.input}
                    />
            </label>
            <label>
                Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        className={styles.input}
                    />
            </label>
            <button type="submit" className={styles.button}>Add contact</button>
        </form>
    );
}