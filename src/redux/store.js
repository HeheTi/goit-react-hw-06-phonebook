import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import contactsReduser from './contacts/contactsReducer';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const rootReducer = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
