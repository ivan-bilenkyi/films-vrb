import {createSelector} from "@reduxjs/toolkit";

export const selectFavoriteFilms = state => state.favorite.items
export const filter = state => state.filter.filter;

export const selectVisibleFavoriteFilms = createSelector(
    [selectFavoriteFilms, filter],
    (films, filter) => {
        return films?.filter(el => {
            return el.title.toLowerCase().includes(filter.toLowerCase());
        });
    }
);