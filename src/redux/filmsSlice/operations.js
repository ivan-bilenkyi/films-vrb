import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://66198904125e9bb9f29a37a3.mockapi.io";

export const getAllFilms = createAsyncThunk(
    'tasks/getAllFilms',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/films');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// export const getFilmById = createAsyncThunk('films/getFilmById', async (id) => {
//     try {
//         const { data } = await axios.get(`/films/${id}`);
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// });

export const deleteById = createAsyncThunk(
    'films/deleteById',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/films/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const updateFilmById = createAsyncThunk('films/updateFilmById', async ({ filmId, value }) => {
    try {
        const { data } = await axios.put(`/films/${filmId}`, { ...value });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});
