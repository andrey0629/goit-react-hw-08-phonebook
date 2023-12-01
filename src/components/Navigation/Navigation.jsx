import { Nav } from 'components/Nav/Nav';
import UserMenu from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Nav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
