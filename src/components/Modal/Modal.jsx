import {useEffect, useState} from 'react';
import {CloseBtn, ModalContent, ModalWrapper} from "./Modal.styled.jsx";
import {FilmForm} from "../Formik/Formik.jsx";
import {FaTimes} from "react-icons/fa";
import {ItemTitle} from "../FilmItem/FilmItem.styled.js";


const Modal = ({ onClose, item= [], onSubmit }) => {
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
        setIsBodyScrollLocked(true);

        return () => {
            setIsBodyScrollLocked(false);
        };
    }, []);


    return (
        <ModalWrapper>
            <ModalContent className="modal-content">
                <ItemTitle>Edit Film</ItemTitle>
                <FilmForm item={item} onSendForm={onSubmit} onClose={onClose}/>
                <CloseBtn onClick={onClose}><FaTimes/></CloseBtn>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;