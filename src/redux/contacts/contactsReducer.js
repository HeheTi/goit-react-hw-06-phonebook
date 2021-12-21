import { combineReducers } from 'redux';
import TYPES from './contactsTypes';

// contacts: {
//     items: [],
//     filter: '',
//   },

//action = {type: "action/types", payload: data}

const itemsReduser = (state = [], action) => {
  switch (action.type) {
    case TYPES.SET:
      return action.payload;

    case TYPES.ADD:
      return [...state, action.payload];

    case TYPES.DELETE:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

const filerReduser = (state = '', action) => {
  switch (action.type) {
    case TYPES.FILTER:
      return action.payload;

    default:
      return state;
  }
};

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filerReduser,
});

export default contactsReduser;
