import { НomePageStyled } from 'pages/HomePage/HomePage.styled';
import { ThemeProvider } from 'components/ThemeProvider/ThemeProvider';
import Header from 'components/components/Header/Header';

function HomePage() {
  return (
    <ThemeProvider>
      <Header />
      <НomePageStyled />
    </ThemeProvider>
  );
}
export default HomePage;

