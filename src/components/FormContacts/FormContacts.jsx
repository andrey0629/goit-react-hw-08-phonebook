import { useState } from 'react';
import { CircularProgress } from '@chakra-ui/react';
import {
  FormWrapper,
  StyledForm,
  StyledButton,
  StyledInput,
} from './Form.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';

function FormContacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (name, number) => {
    const newContact = { name: name.trim(), number: number.trim() };
    dispatch(addContact(newContact));
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const existingContact = contacts.find(
      contact => contact.name === name.trim()
    );
    if (existingContact) {
      alert(name + ' is already in contacts!');
      reset();
      return;
    }
    handleAddContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Name
          <StyledInput
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <StyledInput
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <StyledButton type="submit" disabled={isLoading}>
          {' '}
          {isLoading && contacts.length !== 0 ? (
            <CircularProgress isIndeterminate color="green.300" />
          ) : (
            'Add contact'
          )}
        </StyledButton>
      </StyledForm>
    </FormWrapper>
  );
}

export default FormContacts;
