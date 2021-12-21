import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { setItems } from '../../redux/contacts/contactsActions';
import * as storage from '../../services/localStorage.js';
import s from './App.module.css';

const CONTACTS_KEY_LS = 'contacts';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const dataLocalStorage = storage.get(CONTACTS_KEY_LS);

    if (dataLocalStorage) {
      dispatch(setItems(dataLocalStorage));
    }
  }, [dispatch]);

  useEffect(() => {
    storage.save(CONTACTS_KEY_LS, contacts);
  }, [contacts]);

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

// deleteContact = () => {
//   const id = e.target.parentElement.id;
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(item => item.id !== id),
//   }));
// };
