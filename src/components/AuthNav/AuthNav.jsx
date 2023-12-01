import { StyledNavLink } from 'components/Nav/Nav.styled';
import { AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/registration">Registration</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthNavContainer>
  );
};
