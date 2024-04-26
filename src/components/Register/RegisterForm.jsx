import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {ToggleBtn} from "../Login/LoginForm.jsx";

const FormContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const Text = styled.p`
    margin-bottom: 40px;
`;

const FormControl = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

const Input = styled(Field)`
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.10);


`;

const ErrorMsg = styled.div`
    position: absolute;
    color: red;
    font-size: 0.8rem;
`;

const SubmitButton = styled.button`
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

const validationSchema = Yup.object({
    name: Yup.string().required('Обов\'язкове поле'),
    email: Yup.string().email('Неправильний формат email').required('Обов\'язкове поле'),
    password: Yup.string().required('Обов\'язкове поле')
});

const initialState = {
    name: '',
    email: '',
    password: ''
};

export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(true);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <FormContainer>
            <Title>Register</Title>
            <Text>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</Text>
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <FormControl>
                        <Input type="text" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component={ErrorMsg} />
                    </FormControl>

                    <FormControl>
                        <Input type="email"  name="email" placeholder="Email" />
                        <ErrorMessage name="email" component={ErrorMsg} />
                    </FormControl>

                    <FormControl>
                        <Input type={showPassword ? 'password' : name} id="password" name="password" placeholder="Password"/>
                        <ToggleBtn type="button"
                                   onClick={handleTogglePassword}>{showPassword ? <IoEyeOffOutline/> :
                            <IoEyeOutline/>}</ToggleBtn>
                        <ErrorMessage name="password" component={ErrorMsg}/>
                    </FormControl>

                    <SubmitButton type="submit">Sign Up</SubmitButton>
                </Form>
            </Formik>
        </FormContainer>
    );
};
