// import { useState } from 'react';
// import useLocalStorage from 'Hooks/useLocalStorage';
// import styles from './styles.module.css';
// import { FaJournalWhills } from 'react-icons/fa';
// import Form from '../Form';
// import Contacts from 'components/Contacts';
// import Filter from 'components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from 'redux/store';

export default function App() {
    const dispatch = useDispatch();
    const numberOfClicks = useSelector(state => state.clicks.value);
    // const [contacts, setContacts] = useLocalStorage('contacts', [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '+38 095 459 1256' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '+38 095 443 8912' },
    //   { id: 'id-3', name: 'Eden Clements', number: '+38 095 645 1779' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '+38 095 227 9126' },
    // ]);
    // const [filter, setFilter] = useState('');

    // const addContact = contact => {
    //   setContacts([...contacts, contact]);
    // };

    // const onFilterInput = value => {
    // setFilter(value);
    // };

    // const filteredContacts = () => {
    //   return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    //   );
    // };

    // const deleteContact = e => {
    // const elemToRemove = e.currentTarget.parentNode.id;
    // setContacts(contacts.filter(item => item.id !== elemToRemove));
    // };

    console.log('increment: ', increment());

    return (
        <>
            <button onClick={() => dispatch()}>{numberOfClicks}</button>
        </>
    );
}

// <div className={styles.wrapper}>
//   <h1 className={styles.h1}>
//   <FaJournalWhills size={28} className={styles.icon} />Phonebook
//   </h1>
//   <Form addContact={addContact} contacts={contacts} />
//   <h2>Contacts</h2>
//   <Filter onFilterInput={onFilterInput} />
//   <Contacts
//     contacts={contacts}
//     filter={filter}
//     filteredContacts={filteredContacts}
//     deleteContact={deleteContact}
//   />
//   {contacts.length === 0 && (
//   <p style={{ color: 'blue', textDecoration: 'underline' }}> no contacts available </p>
// )}
// </div>
