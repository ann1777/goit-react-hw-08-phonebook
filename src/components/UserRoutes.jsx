import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { RestrictedRoute } from './PublicRoute';
import { Loader } from './components/Loader/Loader';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/PhoneAppPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/register"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/login" component={<LoginPage />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo="/contacts"
                component={<ContactsPage />}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
