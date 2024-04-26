import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../components/Global.styled.js";
import { Modal } from "../../components/Modal/Modal.jsx";
import { updateFilmById, getFilmById } from "../../redux/filmsSlice/operations.js";
import { EditButton, FilmDetails, FilmImage, FilmInfo, FilmRating, FilmTitle, RatingIcon, StyledBackLink } from "./DetailsPage.styled.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "../../redux/filmsSlice/selectors.js";
import { IoIosArrowBack, IoIosStar } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ItemTitle } from "../../components/FilmItem/FilmItem.styled.js";
import { FilmForm } from "../../components/Formik/Formik.jsx";
import { FaTimes } from "react-icons/fa";
import styles from "../../components/Modal/Modal.module.css";

export default function DetailsPage () {
    const location = useLocation();
    const backLink = useRef(location);
    const [item, setItem] = useState(location.state.item);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const films = useSelector(selectFilms);

    const film = films.find(f => f.id === item.id);

    useEffect(() => {
        const fetchFilmById = async () =>{
            try {
                dispatch(getFilmById(item.id));
            } catch (error) {
                console.error(error);
            }
        }
        fetchFilmById();
    }, [item.id]);


    const handleSubmit = (id, values) => {
        dispatch(updateFilmById({ id, values }));
    };

    if (!film) return null;

    return (
        <Container>
            <StyledBackLink to={backLink.current.state?.from ?? "/"}>
                <IoIosArrowBack style={{ marginRight: '5px' }} />
                Go back
            </StyledBackLink>

            <FilmDetails>
                <FilmImage src={film.image} alt={film.title} />

                <FilmInfo>
                    <FilmTitle>{film.title}</FilmTitle>
                    <p>{film.description}</p>

                    <FilmRating>
                        <RatingIcon>
                            <IoIosStar />
                        </RatingIcon>
                        <p>{film.rating}</p>
                    </FilmRating>

                    <p>Release Date: {film.release_date}</p>
                    <p>Genre: {film.genre.join(', ')}</p>
                    <p>Actors: {film.actors.join(', ')}</p>
                    <p>Director: {film.director}</p>
                    <EditButton onClick={() => setIsOpen(true)}>Edit Film</EditButton>
                </FilmInfo>

            </FilmDetails>

            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <ItemTitle>Edit Film</ItemTitle>
                <FilmForm item={item} onSendForm={handleSubmit} onClose={() => setIsOpen(false)} />
                <button className={styles.close_modal} onClick={() => setIsOpen(false)}><FaTimes /></button>
            </Modal>
        </Container>
    );
};
