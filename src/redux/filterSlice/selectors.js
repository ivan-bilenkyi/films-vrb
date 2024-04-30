import {createSelector} from "@reduxjs/toolkit";

export const selectFilms = state => state.films.items;
export const selectGenre = state => state.filter.genre;
export const selectRelease = state => state.filter.release;

export const selectFilter = state => state.filter.filter;

export const selectVisibleFilms = createSelector(
    [selectFilms, selectFilter, selectGenre, selectRelease],
    (films, filter, genre, release) => {
        return films?.filter(film => {
            const filterValue = filter.toLowerCase().trim();
            const titleIncludesFilter = film.title.toLowerCase().includes(filterValue);

            const genreMatch = genre === '' || film.genre.includes(genre);

            const releaseMatch = release === '' || film.release_date.includes(release);

            return titleIncludesFilter && genreMatch && releaseMatch;
        });
    }
);



