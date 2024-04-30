import styled from "styled-components";
import {Field} from "formik";

export const FormContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
`;

export const Text = styled.p`
    margin-bottom: 40px;
`;

export const FormControl = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

export const Input = styled(Field)`
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.10);


`;

export const ErrorMsg = styled.div`
    position: absolute;
    color: red;
    font-size: 0.8rem;
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 12px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #0056b3;
    }
`;

export const ToggleBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translate(0, -50%);
    border: 0;
    padding: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;