import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #333;
    padding: 16px 0;

    /* Styles for the first child div */
    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
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

export const Wrapper = styled.div`
    display: flex;
    gap: 16px;
    button {
        border-radius: 10px;
        border: 1px solid #fff;
    }
`;

