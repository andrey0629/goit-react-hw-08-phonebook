import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import FormEdit from 'components/FormEdit/FormEdit';

export function Modal({ currentContactId, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydownCloseModal);
    return () => {
      window.removeEventListener('keydown', handleKeydownCloseModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeydownCloseModal = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleClickMouseCloseModal = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };
  return (
    <Overlay onClick={handleClickMouseCloseModal}>
      <ModalWindow>
        <FormEdit currentContactId={currentContactId} onClose={onClose} />
      </ModalWindow>
    </Overlay>
  );
}
