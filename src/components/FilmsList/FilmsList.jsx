import {StyledList, StyledTitle} from "./Films.styled.js";
import {FilmItem} from "../FilmItem/FilmItem.jsx";

export const FilmsList = ({ films }) => {
    return (
        <>
            <StyledTitle>Films</StyledTitle>
            <StyledList>
                {films.map((film) => <FilmItem key={film.id} item={film} />)}
            </StyledList>
        </>
    );
};
