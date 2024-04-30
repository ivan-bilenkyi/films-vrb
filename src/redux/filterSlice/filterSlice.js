import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
        genre: '',
        release: '',
    },
    reducers: {
        setFilter(state, { payload }) {
            state[payload.key] = payload.value;
        },
    },
});


export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;