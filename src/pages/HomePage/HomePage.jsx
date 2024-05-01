import React, {useEffect, useState} from "react";
import { FilmsList } from "../../components/FilmsList/FilmsList.jsx";
import { Container } from "../../components/Global.styled.js";
import {StyledTitle} from "../../components/FilmsList/FilmsList.styled.js";
import {Wrapper, WrapperBtn} from "./HomePage.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectIsLoading} from "../../redux/filmsSlice/selectors.js";
import {createFilms, getAllFilms} from "../../redux/filmsSlice/operations.js";
import {EditButton} from "../DetailsPage/DetailsPage.styled.js";
import {ItemTitle} from "../../components/FilmItem/FilmItem.styled.js";
import {FilmForm} from "../../components/Formik/Formik.jsx";
import styles from "../../components/Modal/Modal.module.css";
import {FaTimes} from "react-icons/fa";
import {Modal} from "../../components/Modal/Modal.jsx";
import {SelectFilters} from "../../components/SelectFilters/SelectFilters.jsx";

export default function HomePage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        dispatch(getAllFilms());
    }, [dispatch]);

    const handleSubmit = (id, values) => {
        dispatch(createFilms(values))
    };

    return (
        <Container>
            <Wrapper>
                <StyledTitle>Films</StyledTitle>
                <WrapperBtn>
                    <SelectFilters/>
                    <EditButton onClick={() => setIsOpen(true)}>Add Film</EditButton>
                </WrapperBtn>
                <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <ItemTitle>New Film</ItemTitle>
                    <FilmForm onSendForm={handleSubmit} onClose={() => setIsOpen(false)} />
                    <button className={styles.close_modal} onClick={() => setIsOpen(false)}><FaTimes /></button>
                </Modal>
            </Wrapper>
            <FilmsList />
        </Container>
    );
}
