import {Link, useLocation} from "react-router-dom";
import {ImgWrapper, ItemInfo, ItemInfoWrapper, ItemTitle, StyledImg, StyledLi} from "./FilmItem.styled.js";
//
// {
//     "id": 5,
//     "title": "Schindler's List",
//     "description": "The story of Oskar Schindler, who saved the lives of thousands of Jews during the Holocaust.",
//     "rating": 8.9,
//     "release_date": "1993-12-15",
//     "genre": [
//     "historical drama",
//     "war"
// ],
//     "actors": [
//     "Liam Neeson",
//     "Ben Kingsley",
//     "Ralph Fiennes"
// ],
//     "director": "Steven Spielberg",
//     "image": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
// },


export const FilmItem = ({item}) => {
    const location = useLocation();
    const {id, title, release_date, director, image} = item
    const year = release_date.split("-")[0];
    return (
        <StyledLi>
            <Link to={`/${id}`} state={{from: location}}>
                <ImgWrapper>
                    <StyledImg src={image} alt={title}/>
                </ImgWrapper>
                <ItemInfoWrapper>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemInfo>{year}</ItemInfo>
                </ItemInfoWrapper>
            </Link>
        </StyledLi>
    )
}