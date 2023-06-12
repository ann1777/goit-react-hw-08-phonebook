import { useDispatch } from 'react-redux';
import { LogOutButton, LogOutWrap } from './UserLogOut.styled';
import { logOutUserThunk } from 'redux/auth/auth-operations';

function UserLogOut() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <LogOutWrap>
      <LogOutButton type="button" onClick={handleLogOut}>
        LogOut
      </LogOutButton>
    </LogOutWrap>
  );
}

export default UserLogOut;
