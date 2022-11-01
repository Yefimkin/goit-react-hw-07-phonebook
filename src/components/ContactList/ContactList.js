import PropTypes from "prop-types";
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/asyncThunk'
// import { getContacts } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';
import style from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({contacts}) => {
    const elements = contacts.map(contact => <ContactItem key={contact.id} {...contact} />)
    return (
        <>
            <ul className={style.li}>
                {elements}
            </ul>
        </>
    )
}



// const ContactList = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);

//     const {contacts} = useSelector(getContacts);
//     const filter = useSelector(getFilter);

//     const filteredContacts = () => {
//         if (!contacts) {
//             return;
//         }
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(filter.toLowerCase())
//         );
//     }

//     const filterContacts = filteredContacts();

//     return <ul className={style.li}>
        
//         {filterContacts.map(item =>
//             <ContactItem key={item.id} data={item} />)}
//         </ul>
// }

export default ContactList;

ContactList.defaultProps = {
    contacts: []
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }))
}