import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import {
  List,
  ListItem,
  ContactText,
  DeleteButton,
  ButtonWrap,
  ButtonEdit,
  ContactWrap,
} from './Contacts.styled';
import { ColorRing, FallingLines } from 'react-loader-spinner';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const [isLoadingMap, setIsLoadingMap] = useState({});
  const [currentContactId, setCurrentContactId] = useState(null);

  const handleEditButtonClick = event => {
    const { value } = event.currentTarget;
    setCurrentContactId(value);
  };

  const closeModal = () => {
    setCurrentContactId(null);
  };
  const handleClickDeleteButton = event => {
    const { value } = event.currentTarget;
    if (isLoadingMap[value]) {
      return;
    }
    setIsLoadingMap(prevState => ({
      ...prevState,
      [value]: true,
    }));
    dispatch(deleteContact(value));
  };

  return (
    <>
      <div>
        <List>
          {isError && <p style={{ color: 'red', fontSize: 18 }}>{isError}</p>}
          {isLoading && contacts.length === 0 ? (
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          ) : (
            filteredContacts.map(contact => (
              <ListItem key={contact.id}>
                <ContactWrap>
                  {' '}
                  <ContactText>{contact.name}:</ContactText>
                  <ContactText>{contact.number}</ContactText>
                </ContactWrap>
                <ButtonWrap>
                  <DeleteButton
                    type="button"
                    name="delete"
                    value={contact.id}
                    disabled={isLoadingMap[contact.id]}
                    onClick={handleClickDeleteButton}
                  >
                    {' '}
                    {isLoadingMap[contact.id] && (
                      <ColorRing visible={true} height="18" width="18" />
                    )}{' '}
                    Delete
                  </DeleteButton>
                  <ButtonEdit
                    bgColor={'green.300'}
                    type="button"
                    name="edit"
                    value={contact.id}
                    onClick={handleEditButtonClick}
                  >
                    Edit
                  </ButtonEdit>
                </ButtonWrap>
              </ListItem>
            ))
          )}
        </List>
      </div>
      {currentContactId &&
        createPortal(
          <Modal currentContactId={currentContactId} onClose={closeModal} />,
          modalRoot
        )}
    </>
  );
}

export default ContactsList;
