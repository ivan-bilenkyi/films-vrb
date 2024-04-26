import { createSlice } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: "",
        isAuthenticated: false,
        isRefreshing: true,
        isLoading: false,
        error: null,
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase(register.pending, state => {
    //             state.isLoading = true;
    //             state.isLoggedin = false;
    //         })
    //         .addCase(register.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             state.isAuthenticated = true;
    //             state.user = action.payload.user;
    //             state.token = action.payload.token;
    //             state.isLoggedin = true;
    //         })
    //         .addCase(register.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //             state.isLoggedin = false;
    //         })
    //         .addCase(login.pending, state => {
    //             state.isLoading = true;
    //             state.isLoggedin = false;
    //         })
    //         .addCase(login.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             state.isAuthenticated = true;
    //             state.user = action.payload.user;
    //             state.token = action.payload.token;
    //             state.isLoggedin = true;
    //         })
    //         .addCase(login.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //             state.isLoggedin = false;
    //         })
    //         .addCase(logout.pending, state => {
    //             state.isLoading = true;
    //             state.isLoggedin = true;
    //         })
    //         .addCase(logout.fulfilled, state => {
    //             state.isLoading = false;
    //             state.isAuthenticated = false;
    //             state.token = "";
    //             state.user = { name: null, email: null };
    //             state.isLoggedin = false;
    //         })
    //         .addCase(logout.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //             state.isLoggedin = true;
    //         })
    //         .addCase(refreshUser.pending, state => {
    //             state.isRefreshing = true;
    //         })
    //         .addCase(refreshUser.fulfilled, (state, action) => {
    //             state.user = action.payload;
    //             state.isAuthenticated = true;
    //             state.isRefreshing = false;
    //             state.isLoggedin = true;
    //         })
    //         .addCase(refreshUser.rejected, state => {
    //             state.isRefreshing = false;
    //             state.isLoggedin = false;
    //         });
    // }
});

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
export const authReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);