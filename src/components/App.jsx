import { Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUserThunk } from 'redux/auth/auth-operations';
import { Layout } from './components/Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/HomePage/HomePage';
import { PublicRoute } from '../hooks/PublicRoute';
import { Loader } from './components/Loader/Loader';
import { PrivateRoute } from '../hooks/PrivateRoute';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import { PhoneAppPage } from 'pages/PhoneAppPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <PhoneAppPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
