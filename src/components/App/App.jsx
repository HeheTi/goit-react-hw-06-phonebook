import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import s from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);

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
