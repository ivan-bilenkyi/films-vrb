import { Modal } from "../Modal/Modal.jsx";
import {LoginForm} from "../UserForm/LoginForm.jsx";
import { RegisterForm } from "../UserForm/RegisterForm.jsx";
import { useState } from "react";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {UserMenu} from "../UserMenu/UserMenu.jsx";

export const AuthNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const openModal = (value) => {
        setIsSelected(value);
        setIsOpen(true);
    };

    return (
        isLoggedIn ? (
            <UserMenu/>
        ) : (
            <div>
                <button onClick={() => openModal(true)}>Login</button>
                <button onClick={() => openModal(false)}>Register</button>
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
            </div>
        )
    );
};

