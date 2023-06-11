import { Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUserThunk } from 'redux/auth/auth-operations';
// import { selectIsUser } from 'redux/selectors';
import { Layout } from './components/Layout/Layout';
import {RegisterPage} from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { PhoneAppPage } from 'pages/PhoneAppPage';
import HomePage from 'pages/HomePage/HomePage';

function App() {
  // const isUser = useSelector(selectIsUser);
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
            <Route path="/register" element={<RegisterPage />} />
          {/* )} */}
          <Route path="/contacts" element={<PhoneAppPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
