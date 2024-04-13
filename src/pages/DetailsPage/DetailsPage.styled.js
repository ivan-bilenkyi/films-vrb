import styled from "styled-components";
import {Link} from "react-router-dom";

// export const StyledBackLink = styled(Link)`
// text-decoration: none;
// display: block;
// margin: 40px 0;
// text-align: center;
// color: #333333;
//
// &:hover {
//     color: red;
// }
// `;

export const StyledBackLink = styled(Link)`
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

export const FilmDetails = styled.div`
    display: flex;
    gap: 20px;
`;

export const FilmImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
`;

export const FilmInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
`;

export const FilmTitle = styled.h1`
    font-size: 24px;
`;

export const FilmRating = styled.div`
    display: flex;
    align-items: center;
`;

export const RatingIcon = styled.div`
    color: #ffc107;
    margin-right: 5px;
`;

export const EditButton = styled.button`
    background-color: #333333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    max-width: fit-content;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        color: red;
    }
`;