import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { StyledInput, FormWrapper } from '../FormContacts/Form.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FormWrapper>
      <label>
        Find contacts by name
        <StyledInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </FormWrapper>
  );
}

export default Filter;
