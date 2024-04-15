import { styled } from "styled-components";

export const StyledTitle = styled.h1`
color: #424242;
`;

export const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    list-style: none;
    
    @media (min-width: 768px) {
        gap: 24px;
    }

    @media (min-width: 1440px) {
        gap: 25px;
    }
`;
