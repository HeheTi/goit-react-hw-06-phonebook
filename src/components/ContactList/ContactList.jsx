import { useEffect, memo, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsActions';
import ItemContact from './ItemContact';
import s from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 1) {
      dispatch(changeFilter(''));
    }
  }, [contacts.length, dispatch]);

  const filterContacts = useMemo(() => {
    const normalizedData = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedData),
    );
  }, [contacts, filter]);

  return (
    <ul className={s.list}>
      {filterContacts.map(({ id, name, number }) => {
        return <ItemContact id={id} key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default memo(ContactList);
