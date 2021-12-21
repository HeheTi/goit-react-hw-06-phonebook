import TYPES from './contactsTypes';

const setItems = items => ({
  type: TYPES.SET,
  payload: items,
});

const addItem = item => ({
  type: TYPES.ADD,
  payload: item,
});

const removeItem = id => ({
  type: TYPES.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: TYPES.FILTER,
  payload: value,
});

export { setItems, addItem, removeItem, changeFilter };
