import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://66198904125e9bb9f29a37a3.mockapi.io";

export const getAllFilms = createAsyncThunk(
    'tasks/getAllFilms',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get('/films');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getFilmById = createAsyncThunk(
    'films/getFilmById',
    async (id) => {
    try {
        const { data } = await axios.get(`/films/${id}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteById = createAsyncThunk(
    'films/deleteById',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/films/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const updateFilmById = createAsyncThunk(
    'films/updateFilmById',
    async ({id, values}, thunkAPI) => {
        try {
            const { data } = await axios.put(`/films/${id}`, { ...values });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createFilms = createAsyncThunk(
    'films/createFilm',
    async ( values , thunkAPI) => {
        try {
            const { data } = await axios.post('/films', { ...values });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



