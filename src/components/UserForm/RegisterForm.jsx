import {useState} from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {ErrorMsg, FormContainer, FormControl, Input, SubmitButton, Title, Text, ToggleBtn} from "./Form.styled.js";
import {register} from "../../redux/auth/operations.js";
import {useDispatch} from "react-redux";



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
    const dispatch = useDispatch()

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (values) => {
        dispatch(register(values))
    }

    return (
        <FormContainer>
            <Title>Register</Title>
            <Text>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</Text>
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values)
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
