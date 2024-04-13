import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    //width: 100vw;
    background-color: #333;
    height: 50px;
`;

export const StyledNav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    gap: 40px;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #FFFFFF;
    letter-spacing: .8px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 16px 0;

    &.active {
        color: #c92d2d;
    };
`;

