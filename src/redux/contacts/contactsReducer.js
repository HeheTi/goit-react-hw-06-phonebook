import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addItem, removeItem, changeFilter } from './contactsActions';

// ИСПОЛЬЗУЯ КОЛБЕК builder

const itemsReduser = createReducer([], builder => {
  builder
    .addCase(addItem, (state, action) => [...state, action.payload])
    .addCase(removeItem, (state, action) =>
      state.filter(item => item.id !== action.payload),
    );
});

const filerReduser = createReducer('', builder => {
  builder.addCase(changeFilter, (_, action) => action.payload);
});

// ИСПОЛЬЗУЯ ОБЪЕКТ С ПОЛЯМИ-ТИПАМИ ACTIONS
// const itemsReduser = createReducer([], {
//   [addItem]: (state, action) => [...state, action.payload],
//   [removeItem]: (state, action) =>
//     state.filter(item => item.id !== action.payload),
// });

// const filerReduser = createReducer('', {
//   [changeFilter]: (_, action) => action.payload,
// });

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filerReduser,
});

export default contactsReduser;
