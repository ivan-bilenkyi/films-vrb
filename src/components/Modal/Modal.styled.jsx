import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    width: 650px;
    padding: 20px;
    border-radius: 5px;
    position: relative;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #333;
    background: transparent;
    border: none;
    
    svg {
        height: 24px;
        width: 24px;
    }
`;