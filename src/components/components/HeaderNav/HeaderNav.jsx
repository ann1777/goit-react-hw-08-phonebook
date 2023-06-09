// import { useAuth } from 'redux/auth/useAuth';
import { Nav, NavLink } from './HeaderNav.styled';

export const HeaderNav = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
    </Nav>
  );
};
