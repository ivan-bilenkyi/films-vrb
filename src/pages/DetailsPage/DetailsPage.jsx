import { useLocation } from "react-router-dom";
import {IoIosArrowBack, IoIosStar} from 'react-icons/io';
import {useEffect, useRef, useState} from "react";
import {Container} from "../../components/Global.styled.js";
import Modal from "../../components/Modal/Modal.jsx";
import {getFilmById} from "../../services/api.js";
import {
    EditButton,
    FilmDetails,
    FilmImage,
    FilmInfo,
    FilmRating,
    FilmTitle, RatingIcon,
    StyledBackLink
} from "./DetailsPage.styled.js";





const DetailsPage = () => {
    const location = useLocation();
    const backLink = useRef(location);
    // const item = location.state.item;
    const [item, setItem] = useState(location.state.item)
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchFilmById = async () =>{
            try {
                const result = await getFilmById(item.id)
                console.log(result)
                setItem(result)
            } catch (error) {

            }
        }
        fetchFilmById();
    }, []);
    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Container>
            <StyledBackLink to={backLink.current.state?.from ?? "/"}>
                <IoIosArrowBack style={{ marginRight: '5px' }} />
                Go back
            </StyledBackLink>

            <FilmDetails>
                <FilmImage src={item.image} alt={item.title} />

                <FilmInfo>
                    <FilmTitle>{item.title}</FilmTitle>
                    <p>{item.description}</p>

                    <FilmRating>
                        <RatingIcon>
                            <IoIosStar/>
                        </RatingIcon>
                        <p>{item.rating}</p>
                    </FilmRating>

                    <p>Release Date: {item.release_date}</p>
                    <p>Genre: {item.genre.join(', ')}</p>
                    <p>Actors: {item.actors.join(', ')}</p>
                    <p>Director: {item.director}</p>
                    <EditButton onClick={handleOpenModal}>Edit Film</EditButton>
                </FilmInfo>

            </FilmDetails>
            {isModalOpen && <Modal onClose={handleOpenModal} item={item} /> }
        </Container>
    );
};

export default DetailsPage;
