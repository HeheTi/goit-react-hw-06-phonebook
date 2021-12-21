import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Input from '../../common/Input';
import { addItem } from '../../redux/contacts/contactsActions';
import { normalizeName } from '../../services/normalize';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const [dataForm, setdataForm] = useState({
  //   name: '',
  //   number: '',
  // });

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  // const addDataForm = e => {
  //   return setdataForm(prevState => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const addDataForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  const onSubFormData = e => {
    e.preventDefault();

    const objData = { id: nanoid(), name, number };

    addContacts(objData);

    resetForm();
  };

  const addContacts = obj => {
    const isHaveName = contacts.some(({ name }) => name === obj.name);

    if (isHaveName) {
      return alert(`${normalizeName(obj.name)} is alredy in contacts.`);
    }

    dispatch(addItem(obj));
  };

  return (
    <form onSubmit={onSubFormData} className={s.form}>
      <Input
        label="Name"
        type="text"
        name="name"
        onChange={addDataForm}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Input
        label="Number"
        type="tel"
        name="number"
        onChange={addDataForm}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={s.btnAdd}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
