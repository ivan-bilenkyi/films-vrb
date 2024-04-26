import { Modal } from "../Modal/Modal.jsx";
import { Login } from "../Login/Login.jsx";
import { Register } from "../Register/Register.jsx";
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
            <button onClick={() => openModal(true)}>Login</button> {/* При кліку відкривається форма логіну */}
            <button onClick={() => openModal(false)}>Register</button> {/* При кліку відкривається форма реєстрації */}

            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                {/* Відображення логіну або реєстрації в залежності від значення isLoginSelected */}
                {isSelected ? <Login /> : <Register />}
            </Modal>
        </div>
    );
};
