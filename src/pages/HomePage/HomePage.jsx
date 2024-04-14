import { useEffect } from "react";
import { FilmsList } from "../../components/FilmsList/FilmsList.jsx";
import { Container } from "../../components/Global.styled.js";
import {StyledTitle} from "../../components/FilmsList/FilmsList.styled.js";
import {Wrapper} from "./HomePage.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectIsLoading} from "../../redux/filmsSlice/selectors.js";
import {getAllFilms} from "../../redux/filmsSlice/operations.js";

export default function HomePage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getAllFilms());
    }, [dispatch]);



    return (
        <Container>
            <Wrapper>
                <StyledTitle>Films</StyledTitle>
            </Wrapper>
            <FilmsList />
        </Container>
    );
}
