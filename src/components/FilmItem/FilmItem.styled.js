import styled from "styled-components";

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    transition: background-color 0.3s, opacity 0.3s;
    
    @media (min-width: 1440px) {
        background-color: rgba(0, 0, 0, 0);
        opacity: 0;

    }
`;

export const ButtonGroup = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 4px;
    opacity: 1;
    transition: background-color 0.3s, opacity 0.3s;
    
    @media (min-width: 1440px) {
        opacity: 0;
        
    }
`;

export const BtnFavorite = styled.button`
    background: transparent;
    padding: 0;
    border: none;

    svg {
        width: 32px;
        height: 32px;
        fill: #ffffff;
    }

    &.active {
        svg {
            fill: #ff0000;
        }
    }
`;

export const StyledItem = styled.li`
    width: 100%;
    overflow: hidden;
    position: relative;

    &:hover ${StyledOverlay} {
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 1;
    }

    &:hover ${ButtonGroup} {
        opacity: 1;
    }

    &:hover ${BtnFavorite}.active {
        svg {
            fill: #ff0000;
        }
    }
    
    @media (min-width: 768px) {
        width: calc(33.3% - 16px);
    }

    @media (min-width: 1440px) {
        width: calc(20% - 20px);
    }
`;

export const BtnDelete = styled.button`
    background: transparent;
    padding: 0;
    border: none;
    
    svg {
        width: 32px;
        height: 32px;
        fill: #ffffff;
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

export const ItemInfo = styled.p`
    height: 18px;
    margin-top: 2px;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
