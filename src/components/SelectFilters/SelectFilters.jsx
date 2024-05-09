import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "../../redux/filmsSlice/selectors.js";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "../../redux/filterSlice/filterSlice.js";
import {Select, Wrapper} from "./SelectFilters.styled.js";
import SearchInput from "../SearchInput/SearchInput.jsx";

export const SelectFilters = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const films = useSelector(selectFilms);
    const [genres, setGenres] = useState([]);
    const [releases, setReleases] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedRelease, setSelectedRelease] = useState('');

    useEffect(() => {
        const uniqueGenres = new Set();
        const uniqueReleases = new Set();

        films.forEach((film) => {
            film.genre.forEach((genre) => uniqueGenres.add(genre));
            const year = film.release_date.split("-")[0];
            uniqueReleases.add(year);
        });
        const sortedReleases = Array.from(uniqueReleases).sort((a, b) => b - a);
        setGenres(Array.from(uniqueGenres));
        setReleases(sortedReleases);
    }, [films]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const genreParam = params.get("genre");
        const releaseParam = params.get("release");

        setSelectedGenre(genreParam || '');
        setSelectedRelease(releaseParam || '');
    }, [searchParams]);

    const handleFilterChange = (key) => (e) => {
        const select = e.target.value;
        const params = new URLSearchParams(searchParams);
        params.set(key, select);
        setSearchParams(params.toString());

        dispatch(setFilter({ key, value: select }));
    };

    return (
        <Wrapper>
            <Select value={selectedGenre} onChange={handleFilterChange("genre")}>
                <option value="">Select genre</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </Select>
            <Select value={selectedRelease} onChange={handleFilterChange("release")}>
                <option value="">Select release year</option>
                {releases.map((release, index) => (
                    <option key={index} value={release}>
                        {release}
                    </option>
                ))}
            </Select>
            <SearchInput />
        </Wrapper>
    );
};
