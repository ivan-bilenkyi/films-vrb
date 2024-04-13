import { Link, useLocation } from "react-router-dom";
import {IoIosArrowBack, IoIosStar} from 'react-icons/io';
import styled from 'styled-components';
import {useRef, useState} from "react";
import {Container} from "../../components/Global.styled.js";


const StyledBackLink = styled(Link)`
    display: inline-block;
    margin-bottom: 20px;
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        color: #555;
    }
`;

const FilmDetails = styled.div`
    display: flex;
    gap: 20px;
`;

const FilmImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
`;

const FilmInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const FilmTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
`;

const FilmDescription = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const FilmRating = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const RatingIcon = styled.div`
    color: #ffc107;
    margin-right: 5px;
`;

const FilmRatingText = styled.p`
    font-size: 16px;
    margin: 0;
`;

const FilmReleaseDate = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const FilmGenre = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const FilmActors = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const FilmDirector = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const DetailsPage = () => {
    const location = useLocation();
    const backLink = useRef(location);
    const item = location.state.item;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    console.log(isModalOpen)

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
                    <FilmDescription>{item.description}</FilmDescription>

                    <FilmRating>
                        <RatingIcon>
                            <IoIosStar/>
                        </RatingIcon>
                        <FilmRatingText>{item.rating}</FilmRatingText>
                    </FilmRating>

                    <FilmReleaseDate>Release Date: {item.release_date}</FilmReleaseDate>
                    <FilmGenre>Genre: {item.genre.join(', ')}</FilmGenre>
                    <FilmActors>Actors: {item.actors.join(', ')}</FilmActors>
                    <FilmDirector>Director: {item.director}</FilmDirector>
                    <button onClick={handleOpenModal}>Edit Film</button>
                </FilmInfo>

            </FilmDetails>
        </Container>
    );
};

export default DetailsPage;
