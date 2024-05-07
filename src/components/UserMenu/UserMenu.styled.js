import styled from "styled-components";

export const Button = styled.button`
    background-color: #FFFFFF;
    color: #333333;
    padding: 8px 18px;
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

export const Text = styled.p`
    color: #FFFFFF;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;