import {Link, useLocation} from "react-router-dom";
import {
    Button, ButtonGroup,
    ImgWrapper,
    ItemInfo,
    ItemInfoWrapper,
    ItemTitle,
    StyledImg,
    StyledItem, StyledOverlay
} from "./FilmItem.styled.js";
import {useEffect, useState} from "react";
import {IoIosStar} from "react-icons/io";
import {FilmRating, RatingIcon} from "../../pages/DetailsPage/DetailsPage.styled.js";
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorite} from "../../redux/favoriteSlice/favoriteSlice.js";
import {GoBookmark} from "react-icons/go";
import {MdOutlineDeleteOutline} from "react-icons/md";
import {deleteById} from "../../redux/filmsSlice/operations.js";
import {selectFavoriteFilms} from "../../redux/favoriteSlice/selectors.js";

export const FilmItem = ({ item }) => {
    const { id, title, release_date, rating, image } = item;
    const [isFavorite, setIsFavorite] = useState(false);
    const location = useLocation();
    const year = release_date.split("-")[0];
    const dispatch = useDispatch();
    const favoriteFilms = useSelector(selectFavoriteFilms);

    useEffect(() => {
        setIsFavorite(favoriteFilms.some(film => film.id === id));
    }, [favoriteFilms, id]);

    const handleDelete =() => {
        dispatch(addToFavorite(item));
        dispatch(deleteById(id));
    }

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite)
        dispatch(addToFavorite(item));
    };

    return (
        <StyledItem>
            <Link to={`/${id}`} state={{ from: location, item }}>
                <ImgWrapper>
                    <StyledImg src={image} alt={title} />
                    <StyledOverlay>
                        <ButtonGroup>
                            <Button onClick={(e) => { e.preventDefault(); handleDelete() }}>
                                <MdOutlineDeleteOutline/>
                            </Button>
                            <Button onClick={(e) => { e.preventDefault(); handleToggleFavorite()}} className={isFavorite ? 'active' : ''}>
                                <GoBookmark/>
                            </Button>

                        </ButtonGroup>

                    </StyledOverlay>
                </ImgWrapper>

                <ItemInfoWrapper>
                    <ItemTitle>{title}</ItemTitle>
                    <FilmRating>
                        <ItemInfo>{year}</ItemInfo>
                        <RatingIcon>
                            <IoIosStar/>
                            <ItemInfo>{rating}</ItemInfo>
                        </RatingIcon>

                    </FilmRating>
                </ItemInfoWrapper>
            </Link>
        </StyledItem>
    );
};
