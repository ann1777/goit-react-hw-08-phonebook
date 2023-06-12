import Container from 'components/Container/Container';
import MainNav from 'components/HeaderNav/HeaderNav';
import AuthNav from 'components/HeaderAuth/HeaderAuth';
import { Nav, AppНeader } from 'components/NavBar/NavBar.styled';

function NavBar() {
  return (
    <AppНeader>
      <Container>
        <Nav>
          <MainNav />
          <AuthNav />
        </Nav>
      </Container>
    </AppНeader>
  );
}

export default NavBar;
