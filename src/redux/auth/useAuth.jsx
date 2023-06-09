import { useSelector } from 'react-redux';
import {
  selectToken,
  selectIsUser,
  selectIsRefreshing,
  selectIsLogin,
} from 'redux/selectors';

export const useAuth = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLogin);
  const isUser = useSelector(selectIsUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    token,
    isLoggedIn,
    isUser,
    isRefreshing,
  };
};
