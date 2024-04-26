import { Modal } from "../Modal/Modal.jsx";
import {LoginForm} from "../Login/LoginForm.jsx";
import { RegisterForm } from "../Register/RegisterForm.jsx";
import { useState } from "react";

export const UserBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false); // Додано стан для визначення, яка форма має бути відображена

    const openModal = (value) => {
        setIsSelected(value); // Встановлюємо, яка форма буде відображена на основі переданого параметра
        setIsOpen(true);
    };

    return (
        <div>
            <button onClick={() => openModal(true)}>Login</button>
            <button onClick={() => openModal(false)}>Register</button>
            {/*{isSelected ? <LoginForm /> : <RegisterForm />}*/}
            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                {/* Відображення логіну або реєстрації в залежності від значення isLoginSelected */}
                {isSelected ? <LoginForm /> : <RegisterForm />}
                {!isSelected ? <p>Already have an account? <a onClick={() => openModal(true)}>Log In</a></p> :
                    <p>Don’t have an account? <a onClick={() => openModal(false)}>Sign Up</a></p>}
            </Modal>
        </div>
    );
};
