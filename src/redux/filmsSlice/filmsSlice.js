import { createSlice } from '@reduxjs/toolkit';
import { createFilms, deleteById, getAllFilms, getFilmById, updateFilmById } from './operations';

const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: builder =>
        builder
            .addCase(getAllFilms.pending, state => {
                state.loading = true;
            })
            .addCase(getAllFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getAllFilms.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(deleteById.rejected, state => {
                state.error = true;
            })
            .addCase(getFilmById.pending, state => {
                state.loading = true;
            })
            .addCase(getFilmById.fulfilled, (state, action) => {
                state.loading = false;
                const film = action.payload;
                const existingFilmIndex = state.items.findIndex(item => item.id === film.id);
                if (existingFilmIndex !== -1) {
                    state.items[existingFilmIndex] = film;
                } else {
                    state.items.push(film);
                }
            })
            .addCase(getFilmById.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(updateFilmById.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(updateFilmById.fulfilled, (state, action) => {
                state.loading = false;
                const updatedFilm = action.payload;
                const index = state.items.findIndex(item => item.id === updatedFilm.id);
                if (index !== -1) {
                    state.items[index] = updatedFilm;
                } else {
                    state.items.push(updatedFilm);
                }
            })
            .addCase(updateFilmById.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(createFilms.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(createFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(createFilms.rejected, state => {
                state.loading = false;
                state.error = true;
            }),
});

export const filmReducer = filmsSlice.reducer
