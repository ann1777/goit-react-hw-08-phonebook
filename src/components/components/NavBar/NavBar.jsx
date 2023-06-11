import { useSelector } from 'react-redux';
import { getUserIsLoggedIn } from 'redux/auth';
import Container from 'components/Container/Container';
import MainNav from 'components/HeaderNav/HeaderNav';
import AuthNav from 'components/HeaderAuth/HeaderAuth';
import UserLogOut from 'components/UserLogOut/UserLogOut';
import { Nav, AppНeader } from 'components/NavBar/NavBar.styled';

function NavBar() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <AppНeader>
      <Container>
        <Nav>
          <MainNav />
          {isLoggedIn ? <UserLogOut /> : <AuthNav />}
        </Nav>
      </Container>
    </AppНeader>
  );
}

export default NavBar;
