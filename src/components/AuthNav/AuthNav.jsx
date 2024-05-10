import { Modal } from "../Modal/Modal.jsx";
import {LoginForm} from "../UserForm/LoginForm.jsx";
import { RegisterForm } from "../UserForm/RegisterForm.jsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectIsLoggedIn, selectUser} from "../../redux/auth/selectors.js";
import {UserMenu} from "../UserMenu/UserMenu.jsx";
import {Button, Wrapper} from "../UserMenu/UserMenu.styled.js";
import {useAuth} from "../hooks/index.js";

export const AuthNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const {name} = useSelector(selectUser);

    const openModal = (value) => {
        setIsSelected(value);
        setIsOpen(true);
    };



    return (
        name ? (
            <UserMenu/>
        ) : (
            <>
                <Wrapper>
                    <Button onClick={() => openModal(true)}>Login</Button>
                    <Button onClick={() => openModal(false)}>Register</Button>
                </Wrapper>
                <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    {isSelected ? (
                        <>
                            <LoginForm/>
                            <p>Don’t have an account? <a onClick={() => openModal(false)}>Sign Up</a></p>
                        </>
                    ) : (
                        <>
                            <RegisterForm/>
                            <p>Already have an account? <a onClick={() => openModal(true)}>Log In</a></p>
                        </>
                    )}
                </Modal>
            </>
        )
    );
};

