import { createSlice, nanoid, combineReducers } from '@reduxjs/toolkit';

const itemsReduser = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => [...state, action.payload],

      prepare: item => {
        const id = nanoid();
        return { payload: { id: id, ...item } };
      },
    },
    removeItem: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

const filerReduser = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});

export const { addItem, removeItem } = itemsReduser.actions;
export const { changeFilter } = filerReduser.actions;

const contactsReducer = combineReducers({
  [itemsReduser.name]: itemsReduser.reducer,
  [filerReduser.name]: filerReduser.reducer,
});

export default contactsReducer;
