import { useState, useMemo } from 'react';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactsApi';
import Filter from '../Filter/Filter'
import styles from './ContactList.module.css';



export default function ContactList() {
    const { isLoading } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const [filter, setFilter] = useState('');
    const { data: contacts } = useGetContactsQuery();
    

    const filterContacts = useMemo(() => {
        return (
            contacts?.filter(item =>
                item.name.toLowerCase().includes(filter.toLowerCase())
            ) ?? []
        );
    }, [filter, contacts]);


    return (
        <div>
            <Filter filter={filter} onChange={setFilter}/>
        <ul>
            {isLoading ? (
                <b>Loading...</b>
            ) : (filterContacts.map(contact => {
                return (
                    <li key={contact.id} className={styles.li}>
                        <p>{contact.name}: <span>{contact.phone}</span></p>
                        <button type="button"onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                )
            }))}
            </ul>
         </div>
    );
};
