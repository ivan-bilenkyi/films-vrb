import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        setFilter(state, { payload }) {
            state.filter = payload;
        },
    },
});

export const getFilter = state => state.filter.filter;
export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;