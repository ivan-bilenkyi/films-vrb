import {Container} from "../../components/Global.styled.js";
import {Wrapper} from "../HomePage/HomePage.styled.jsx";
import {StyledTitle} from "../../components/FilmsList/FilmsList.styled.js";
import {FilmsList} from "../../components/FilmsList/FilmsList.jsx";
import {useEffect, useState} from "react";

export default function FavoritePage() {

    return (
        <Container>
            <Wrapper>
                <StyledTitle>Favorite</StyledTitle>
            </Wrapper>
            <FilmsList  />
        </Container>
    );
}
