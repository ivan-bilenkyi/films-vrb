import {StyledList} from "./FilmsList.styled.js";
import {FilmItem} from "../FilmItem/FilmItem.jsx";

export const FilmsList = ({ films }) => {

    return (
        <>
            <StyledList>
                {films.map((film) => <FilmItem key={film.id} item={film} />)}
            </StyledList>
        </>
    );
};
