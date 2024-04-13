import styled from "styled-components";

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); 
    opacity: 0; 
    transition: background-color 0.3s, opacity 0.3s;
`;
export const StyledItem = styled.li`
    width: calc(20% - 20px);
    overflow: hidden;
    position: relative;


    &:hover ${StyledOverlay} {
        background-color: rgba(0, 0, 0, 0.5); 
        opacity: 1; 
    }
`;

export const ImgWrapper = styled.div`
    position: relative;
    padding-top: 150%;
    border-radius: 10px;
    overflow: hidden;
`;

export const StyledImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ItemInfoWrapper = styled.div`
    margin: 9px 0 10px;
`;
export const ItemTitle = styled.h2`
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    line-height: 18px;
    color: #333;
    margin-bottom: 16px;
`;

export const ItemInfo = styled.span`
    height: 18px;
    margin-top: 2px;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
    //overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const BtnFavorite = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    padding: 0;
    border: none;

    svg {
        width: 32px;
        height: 32px;
        fill: #FFF; 
    }

    &.active {
        svg {
            fill: red;
        }
    }
`;

