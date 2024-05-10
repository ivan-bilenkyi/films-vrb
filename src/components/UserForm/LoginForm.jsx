import {useState} from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {ErrorMsg, FormContainer, FormControl, Input, SubmitButton, Title, Text, ToggleBtn} from "./Form.styled.js";
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/auth/operations.js";


const validationSchema = Yup.object({
    email: Yup.string().email('Неправильний формат email').required('Обов\'язкове поле'),
    password: Yup.string().required('Обов\'язкове поле')
});

const initialState = {
    email: '',
    password: ''
};

export const LoginForm = () => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(true);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <FormContainer>
            <Title>Log In</Title>
            <Text>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</Text>
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={values => {
                    dispatch(logIn(values)).then(() => {});
                }}
            >
                <Form autoComplete="off">
                    <FormControl>
                        <Input type="email" name="email" placeholder="Email"  />
                        <ErrorMessage name="email" component={ErrorMsg} />
                    </FormControl>


                    <FormControl>
                        <Input type={showPassword ? 'password' : name} name="password" placeholder="Password"/>
                        <ToggleBtn type="button"
                                onClick={handleTogglePassword}>{showPassword ? <IoEyeOffOutline/> :
                            <IoEyeOutline/>}</ToggleBtn>
                        <ErrorMessage name="password" component={ErrorMsg}/>
                    </FormControl>

                    <SubmitButton type="submit">Log In</SubmitButton>
                </Form>
            </Formik>
        </FormContainer>
    );
};
