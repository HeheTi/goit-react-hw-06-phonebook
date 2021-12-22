import { createAction, nanoid } from '@reduxjs/toolkit';

const addItem = createAction('contacts/add_item', item => ({
  payload: {
    ...item,
    id: nanoid(),
  },
}));

const removeItem = createAction('contacts/remove_item');

const changeFilter = createAction('contacts/change_filter');

export { addItem, removeItem, changeFilter };
