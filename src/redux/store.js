import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contacts/contactsReducer';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const persistContactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistContactsConfig, contactsReduser),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
