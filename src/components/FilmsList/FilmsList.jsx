import {StyledList, TextWrapper} from "./FilmsList.styled.js";
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
            {items.length === 0 ? (
                pathname === "/favorite" ? (
                    <TextWrapper>
                        <p>
                            This page is empty, add some films.
                        </p>
                    </TextWrapper>
                ) : (
                    <TextWrapper>
                        <p>
                            <span>Sorry, no results were found </span>
                            for the films filters you selected.
                            You may want to consider other search options to find the film you want.
                        </p>
                        <span>Try changing the search parameters.</span>
                    </TextWrapper>
                )
            ) : (
                <StyledList>
                    {items.map((film) => <FilmItem key={film.id} item={film} />)}
                </StyledList>
            )}
        </>
    );
};

