import { useAuth } from 'hooks/useAuth';
import { NavContainer, StyledNavLink } from './Nav.styled';

export const Nav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavContainer>
  );
};
