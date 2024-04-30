import { createSlice } from '@reduxjs/toolkit';
import {logIn, logOut, register} from "./operations.js";

const initialState = {
    user: {
        name: null,
        email: null,
        id: null,
    },
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.user.email = action.payload.email;
            state.user.name = action.payload.displayName;
            state.user.id = action.payload.uid;
            state.isLoggedIn = true;
        },
    },
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
            })
    }
});


export const authReducer = authSlice.reducer
export const { setUser } = authSlice.actions;