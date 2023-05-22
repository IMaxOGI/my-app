import React, { useEffect } from 'react';
import './style.css';

interface ModalProps {
    order: any;
    confirmDelete: () => void;
    closeModal: () => void;
    showModal: boolean;
}

const CustomModal: React.FC<ModalProps> = ({ order, confirmDelete, closeModal, showModal }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && showModal) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal, showModal]);

    return (
        <>
            {showModal && (
                <div className="modal modal--show" role="dialog" onClick={closeModal}>
                    <div className="modal-dialog modal-dialog--large" onClick={(event) => event.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Подтвердить удаление</h5>
                                <button type="button" className="close modal__close" onClick={closeModal}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Вы уверены, что хотите удалить приход {order && order.title}?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Отмена
                                </button>
                                <button type="button" className="btn btn-primary" onClick={confirmDelete}>
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomModal;
