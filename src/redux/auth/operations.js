import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";
import {auth} from "../../firebase.js"
import toast, { Toaster } from "react-hot-toast";

export const register = createAsyncThunk(
    "auth/register",
    async (body, thunkAPI) => {
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                body.email,
                body.password,
            );
            await updateProfile(user, { displayName: body.name });

            const { uid, displayName, email } = user;

            return { uid, displayName, email };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (body, thunkAPI) => {
        try {
            const {user} = await signInWithEmailAndPassword(
                auth,
                body.email,
                body.password
            );
            const { uid, displayName, email } = user;

            return { uid, displayName, email };
        } catch (error) {
            toast.error(`the user with such data was not found in the database`);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logOut = createAsyncThunk(
    "auth/logOut",
    async (_, thunkAPI) => {
        try {
            await signOut(auth);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



