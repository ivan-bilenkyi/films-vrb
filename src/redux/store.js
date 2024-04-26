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
import {filterReducer} from "./filterSlice/filterSlice.js";
import {authReducer} from "./auth/authSlice.js";
import {filmReducer} from "./filmsSlice/filmsSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
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