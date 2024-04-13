import {Link, useLocation} from "react-router-dom";
import {
    BtnFavorite,
    ImgWrapper,
    ItemInfo,
    ItemInfoWrapper,
    ItemTitle,
    StyledImg,
    StyledItem, StyledOverlay
} from "./FilmItem.styled.js";
import {useEffect, useState} from "react";
import { AiOutlineHeart } from 'react-icons/ai';

export const FilmItem = ({ item }) => {
    const { id, title, release_date, director, image } = item;
    const [isFavorite, setIsFavorite] = useState(false);
    const location = useLocation();
    const year = release_date.split("-")[0];

    useEffect(() => {
        const existingItems = JSON.parse(localStorage.getItem('favoriteFilms')) || [];
        const index = existingItems.findIndex(film => film.id === item.id);
        setIsFavorite(index !== -1);
    }, [item.id]);

    const handleToggleFavorite = () => {
        const existingItems = JSON.parse(localStorage.getItem('favoriteFilms')) || [];
        const index = existingItems.findIndex(film => film.id === item.id);
        const updatedItems = [...existingItems];

        if (index === -1) {
            updatedItems.push(item);
        } else {
            updatedItems.splice(index, 1);
        }

        localStorage.setItem('favoriteFilms', JSON.stringify(updatedItems));

        setIsFavorite(!isFavorite);
    };

    return (
        <StyledItem>
            <Link to={`/${id}`} state={{ from: location, item }}>
                <ImgWrapper>
                    <StyledImg src={image} alt={title} />
                    <StyledOverlay>
                        <BtnFavorite onClick={(e) => { e.preventDefault(); handleToggleFavorite(); }} className={isFavorite ? 'active' : ''}>
                            <AiOutlineHeart />
                        </BtnFavorite>
                    </StyledOverlay>
                </ImgWrapper>

                <ItemInfoWrapper>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemInfo>{year}</ItemInfo>
                </ItemInfoWrapper>
            </Link>

        </StyledItem>
    );
};