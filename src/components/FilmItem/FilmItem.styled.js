import styled from "styled-components";

export const StyledLi = styled.li`
    width: calc(20% - 20px);
    overflow: hidden;
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
    max-height: 54px;
    margin: 5px 0 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: #333;
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