import { useDispatch, useSelector } from 'react-redux';
import { ButtonLogOut, UserMenuContainer, UserName } from './UserMenu.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);
  const HandleClick = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuContainer>
      <UserName>{email}</UserName>
      <ButtonLogOut onClick={HandleClick}>LogOut</ButtonLogOut>
    </UserMenuContainer>
  );
};
export default UserMenu;
