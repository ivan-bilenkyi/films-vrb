import {StyledList} from "./FilmsList.styled.js";
import {FilmItem} from "../FilmItem/FilmItem.jsx";
import {useSelector} from "react-redux";
import {selectVisibleFilms} from "../../redux/filterSlice/selectors.js";
import {useLocation} from "react-router-dom";
import {selectVisibleFavoriteFilms} from "../../redux/favoriteSlice/selectors.js";

export const FilmsList = () => {
    const films = useSelector(selectVisibleFilms)
    const favoriteFilms = useSelector(selectVisibleFavoriteFilms)
    const {pathname} = useLocation()
    const items = pathname === "/" ? films : favoriteFilms;

    return (
        <>
            <StyledList>
                {items.map((film) => <FilmItem key={film.id} item={film} />)}
            </StyledList>
        </>
    );
};
