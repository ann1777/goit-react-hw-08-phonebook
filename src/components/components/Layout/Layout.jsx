import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Container } from './Layout.styled';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Suspense fallback={<div>Loading....</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </Container>
    </>
  );
};
