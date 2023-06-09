import { Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserThunk } from 'redux/auth/auth-operations';
import { currentUser } from 'redux/auth/auth-selectors';
import { Layout } from './components/Layout/Layout';
import {RegistrationPage} from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';
import { PhonebookPage } from 'pages/PhonebookPage';
import HomePage from 'pages/HomePage';

function App() {
  const isUser = useSelector(currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* {isUser ? ( */}
            <Route path="/login" element={<LoginPage />} />
          {/* ) : ( */}
            <Route path="/registration" element={<RegistrationPage />} />
          {/* )} */}
          <Route path="/contacts" element={<PhonebookPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
