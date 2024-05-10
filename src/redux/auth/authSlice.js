import { createSlice } from '@reduxjs/toolkit';
import {logIn, logOut, register} from "./operations.js";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const initialState = {
    user: {
        name: null,
        email: null,
        id: null,
    },
    isLoggedIn: false,
    isLogOut: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.user.name = action.payload.displayName;
                state.user.id = action.payload.uid;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.user.name = action.payload.displayName;
                state.user.id = action.payload.uid;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.user.email = null;
                state.user.name = null;
                state.user.id = null;
                state.isLoggedIn = false;
                state.isLogOut = true;
            })
    }
});



const persistConfig = {
    key: 'user',
    storage,
};

export const authReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);