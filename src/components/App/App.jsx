import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import s from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  // useEffect(() => {
  //   const getContacts = async () => {
  //     const data = await getAllContacts();
  //     console.log('🚀 ~ data', data);
  //     setstate(data);
  //   };

  //   const saveC = async data => {
  //     const addD = await saveItem(data);
  //     console.log('🚀 ~ addD', addD);
  //   };

  //   const delItem = async id => {
  //     const datDel = await deleteItem(id);
  //     console.log('🚀 ~ datDel', datDel);
  //   };

  //   saveC({ name: 'Mambo TI', number: '457733737' });
  //   delItem(4);
  //   getContacts();

  //   return () => {};
  // }, []);

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {!contacts.length && <p>Please, add contact!</p>}
      {!!contacts.length && <ContactList />}
    </div>
  );
};

export default App;
