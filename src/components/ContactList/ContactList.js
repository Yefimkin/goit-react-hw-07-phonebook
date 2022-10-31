import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/acyncThunk'
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import style from './ContactList.module.css';
import Contact from './Contact/Contact';

const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const {contacts, error} = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        if (!contacts) {
            return;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }

    const filteredContacts = getFilteredContacts();

    return <ul className={style.li}>
        {/* {isLoading && <div>Loading...</div>} */}
        {error && <div>Something went wrong, please, try again</div>}
        {filteredContacts.map(item => <Contact key={item.id} {...item} />)
        }
    </ul>
}

export default ContactList;