import { createSlice } from '@reduxjs/toolkit';
import {deleteById, getAllFilms} from './operations';

const slice = createSlice({
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
                state.error = false;
            })
            .addCase(getAllFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getAllFilms.rejected, state => {
                state.loadigetAllFilmsng = false;
                state.error = true;
            })
            .addCase(deleteById.pending, () => {})
            .addCase(deleteById.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(deleteById.rejected, () => {}),
});

export default slice.reducer;