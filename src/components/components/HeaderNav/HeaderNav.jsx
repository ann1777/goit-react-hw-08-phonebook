import { useAuth } from 'hoc/useAuth';
import { Nav, NavLink } from './HeaderNav.styled';

export const HeaderNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      {isLoggedIn && (
        <>
          {' '}
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/">Home</NavLink>{' '}
        </>
      )}
    </Nav>
  );
};
