import {Container} from "../../components/Global.styled.js";
import {Wrapper} from "../HomePage/HomePage.styled.jsx";
import {StyledTitle} from "../../components/FilmsList/FilmsList.styled.js";
import {FilmsList} from "../../components/FilmsList/FilmsList.jsx";
import {useEffect, useState} from "react";

export default function FavoritePage() {
    const [favoriteFilms, setFavoriteFilms] = useState([]);

    useEffect(() => {
        const existingItems = JSON.parse(localStorage.getItem('favoriteFilms')) || [];
        setFavoriteFilms(existingItems);
    }, []);

    return (
        <Container>
            <Wrapper>
                <StyledTitle>Favorite</StyledTitle>
            </Wrapper>
            <FilmsList films={favoriteFilms} />
        </Container>
    );
}
