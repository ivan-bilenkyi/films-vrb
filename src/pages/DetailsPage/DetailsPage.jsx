import { useEffect, useRef, useState } from "react";
import { Container } from "../../components/Global.styled.js";
import Modal from "../../components/Modal/Modal.jsx";
import { updateFilmById, getFilmById } from "../../redux/filmsSlice/operations.js";
import {
    EditButton,
    FilmDetails,
    FilmImage,
    FilmInfo,
    FilmRating,
    FilmTitle,
    RatingIcon,
    StyledBackLink
} from "./DetailsPage.styled.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "../../redux/filmsSlice/selectors.js";
import {IoIosArrowBack, IoIosStar} from "react-icons/io";
import {useLocation} from "react-router-dom";

const DetailsPage = () => {
    const location = useLocation();
    const backLink = useRef(location);
    const [item, setItem] = useState(location.state.item);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

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

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                    <EditButton onClick={handleOpenModal}>Edit Film</EditButton>
                </FilmInfo>

            </FilmDetails>
            {isModalOpen && <Modal onClose={handleOpenModal} item={item} onSubmit={handleSubmit} />}
        </Container>
    );
};

export default DetailsPage;
