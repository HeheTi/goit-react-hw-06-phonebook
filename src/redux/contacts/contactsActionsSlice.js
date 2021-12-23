import { createSlice, nanoid, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },

      prepare: item => {
        const id = nanoid();
        return { payload: { id: id, ...item } };
      },
    },
    removeItem: (state, { payload }) => {
      const idx = state.items.findIndex(contact => contact.id === payload);
      state.items.splice(idx, 1);
    },

    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

// const contactsReducer = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addItem: {
//       reducer: (state, action) => ({
//         ...state,
//         items: [...state.items, action.payload],
//       }),

//       prepare: item => {
//         const id = nanoid();
//         return { payload: { id: id, ...item } };
//       },
//     },
//     removeItem: (state, action) => ({
//       ...state,
//       items: state.items.filter(item => item.id !== action.payload),
//     }),

//     changeFilter: (state, action) => ({ ...state, filter: action.payload }),
//   },
// });

export const { addItem, removeItem, changeFilter } = contactsReducer.actions;

export default contactsReducer.reducer;

// const itemsReduser = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     addItem: {
//       reducer: (state, action) => [...state, action.payload],

//       prepare: item => {
//         const id = nanoid();
//         return { payload: { id: id, ...item } };
//       },
//     },
//     removeItem: (state, action) =>
//       state.filter(item => item.id !== action.payload),
//   },
// });

// const filerReduser = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     changeFilter: (_, action) => action.payload,
//   },
// });

// export const { addItem, removeItem } = itemsReduser.actions;
// export const { changeFilter } = filerReduser.actions;

// const contactsReducer = combineReducers({
//   [itemsReduser.name]: itemsReduser.reducer,
//   [filerReduser.name]: filerReduser.reducer,
// });

// export default contactsReducer;
