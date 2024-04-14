import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from 'redux-persist';
import {favoriteReducer} from "./favoriteSlice/favoriteSlice.js";
import filmReducer from "./filmsSlice/filmsSlice.js";
import {filterReducer} from "./filterSlice/filterSlice.js";

export const store = configureStore({
    reducer: {
        films: filmReducer,
        favorite: favoriteReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);