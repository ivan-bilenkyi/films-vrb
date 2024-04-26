import styled from "styled-components";
import {ErrorMessage, Field, Form} from "formik";

export const StyledForm = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;

    }
`;

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    @media (min-width: 768px) {
        width: calc(50% - 10px);
    }
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled(Field)`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
    flex: 1;

    &:focus {
        border-color: #6e93b5;
    }
`;

export const DescriptionInput = styled(Input)`
    resize: none; 
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    margin-top: 5px;
    font-size: 12px;
`;

export const StyledButton = styled.button`
    padding: 10px;
    background-color: #333333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex-grow: 1; 

    &:hover {
        color: red;
    }
`;