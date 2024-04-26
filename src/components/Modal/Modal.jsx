import { useCallback, useEffect, useMemo, useRef } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, locked, onClose, children, ...props }) => {
    const modalRef = useRef(null);

    const dialogClasses = useMemo(() => {
        const classes = [styles.modal];
        if (!isOpen) classes.push(styles["modal--closing"]);
        return classes.join(" ");
    }, [isOpen]);

    const onCancel = useCallback((e) => {
        e.preventDefault();
        if (!locked) onClose();
    }, [locked, onClose]);

    const onClick = useCallback(({ target }) => {
        const { current: el } = modalRef;
        if (target === el && !locked) onClose();
    }, [locked, onClose]);

    const onAnimEnd = useCallback(() => {
        const { current: el } = modalRef;
        if (!isOpen) el.close();
    }, [isOpen]);

    useEffect(() => {
        const { current: el } = modalRef;
        if (isOpen) el.showModal();
    }, [isOpen]);

    return (
        <dialog
            ref={modalRef}
            className={dialogClasses}
            onClose={onClose}
            onCancel={onCancel}
            onClick={onClick}
            onAnimationEnd={onAnimEnd}
        >
            <div className={styles.modal__container}>{children}</div>
        </dialog>
    );
};
