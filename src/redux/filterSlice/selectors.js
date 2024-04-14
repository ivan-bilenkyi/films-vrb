import {createSelector} from "@reduxjs/toolkit";

export const selectFilms = state => state.films.items;
export const filter = state => state.filter.filter;

export const selectVisibleFilms = createSelector(
    [selectFilms, filter],
    (films, filter) => {
        return films?.filter(el => {
            return el.title.toLowerCase().includes(filter.toLowerCase());
        });
    }
);