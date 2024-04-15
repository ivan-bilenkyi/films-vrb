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
            state.items.push(payload);
        },
        removeFavorite(state, { payload }) {
            const existingItemIndex = state.items.findIndex(item => item.id === payload.id);
            if (existingItemIndex !== -1) state.items.splice(existingItemIndex, 1);
        },
    },
});

export const { addToFavorite, removeFavorite } = favoriteSlice.actions;

const persistConfig = {
    key: 'favorite',
    storage,
};

export const favoriteReducer = persistReducer(
    persistConfig,
    favoriteSlice.reducer
);
