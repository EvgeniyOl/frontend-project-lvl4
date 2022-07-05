import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Navbar } from 'react-bootstrap';
import useAuth from '../hooks/useAuth.jsx';
import routes from '../utils/routes.js';

function NavbarLayout() {
  const auth = useAuth();
  const { t } = useTranslation('translation', { keyPrefix: 'navbar' });
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href={routes.chatPage()}>Hexlet Chat</Navbar.Brand>
        {auth.loggedIn ? (
          <Button variant="primary" onClick={auth.logOut}>
            {t('exit')}
          </Button>
        ) : null}
      </Container>
    </Navbar>
  );
}
export default NavbarLayout;
