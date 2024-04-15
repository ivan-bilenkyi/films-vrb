import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 280px;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 748px;
    }

    @media (min-width: 1440px) {
        max-width: 1280px;
    }
`;