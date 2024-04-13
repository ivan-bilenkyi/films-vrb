import {Container} from "../../components/Global.styled.js";
import {Wrapper} from "../HomePage/HomePage.styled.jsx";
import {StyledTitle} from "../../components/FilmsList/FilmsList.styled.js";
import SearchInput from "../../components/SearchInput/SearchInput.jsx";
import {FilmsList} from "../../components/FilmsList/FilmsList.jsx";
import {useEffect, useState} from "react";

export default function FavoritePage() {
    const [favoriteFilms, setFavoriteFilms] = useState([]);

    useEffect(() => {
        // Отримуємо елементи з локального сховища при завантаженні сторінки
        const existingItems = JSON.parse(localStorage.getItem('favoriteFilms')) || [];
        setFavoriteFilms(existingItems);
    }, []); // Запускаємо ефект лише один раз при завантаженні сторінки

    return (
        <Container>
            <Wrapper>
                <StyledTitle>Favorite</StyledTitle>
            </Wrapper>
            {/* Передаємо отримані елементи у компонент FilmList */}
            <FilmsList films={favoriteFilms} />
        </Container>
    );
}
