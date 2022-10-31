import { useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import Contact from './Contact/Contact';

function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const list = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <ul className={s.ContactList}>
      {list().map(({ name, number, id }, idx) => (
        <Contact key={id} idx={idx} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

export default ContactsList;
