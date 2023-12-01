import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Container, Title } from './Layout.styled';
const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <Title>Phonebook</Title>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default Layout;
