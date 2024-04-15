import { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import {ItemTitle} from "../FilmItem/FilmItem.styled.js";
import {FilmForm} from "../Formik/Formik.jsx";

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: auto;
`;

const ModalContent = styled.div`
    background-color: white;
    width: 90%; 
    max-width: 600px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 5px;
    position: relative;
    overflow-y: auto;
    
    @media (min-width: 1440px) {
        top: 50%;
        transform: translateY(-50%);
    }
`;

const CloseBtn = styled.button`
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

const Modal = ({ onClose, item = [], onSubmit }) => {
    const [isBodyScrollLocked, setIsBodyScrollLocked] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (event) => {
            if (!event.target.closest('.modal-content')) {
                onClose();
            }
        };

        if (isBodyScrollLocked) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('click', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isBodyScrollLocked, onClose]);

    useEffect(() => {
        setIsBodyScrollLocked(true); // Змінено на true для відкриття модального вікна

        return () => {
            setIsBodyScrollLocked(false); // Змінено на false для закриття модального вікна
        };
    }, []);


    return (
        <ModalWrapper>
            <ModalContent className="modal-content">
                <CloseBtn onClick={onClose}><FaTimes/></CloseBtn>
                <ItemTitle>Edit Film</ItemTitle>
                <FilmForm item={item} onSendForm={onSubmit} onClose={onClose}/>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
