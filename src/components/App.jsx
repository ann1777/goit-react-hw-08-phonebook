import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginPage } from 'pages/LoginPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import HomePage from 'pages/HomePage';
import { Layout } from './components/Layout';
import ContactsForm from './ContactsForm/ContactsForm';
import { useEffect } from 'react';
import { getCurrentUserThunk } from 'redux/auth/auth-operations';
import { currentUser } from 'redux/auth/auth-selectors';

function App() {
  const isUser = useSelector(currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsForm />} />
          {isUser ? (
            <Route path="/login" element={<LoginPage />} />
          ) : (
            <Route path="/registration" element={<RegistrationPage />} />)}        
        </Route>
      </Routes>
  );
}
export default App;
