import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        items: []
    },
    reducers: {
        addToFavorite(state, { payload }) {
            const newItem = payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
            if (existingItemIndex !== -1) {
                state.items.splice(existingItemIndex, 1);
            } else {
                state.items.push(newItem);
            }
        },
    },
});

export const { addToFavorite } = favoriteSlice.actions;

const persistConfig = {
    key: 'favorite',
    storage,
};

export const favoriteReducer = persistReducer(
    persistConfig,
    favoriteSlice.reducer
);
