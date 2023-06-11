import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth';
import { logOut } from 'redux/auth';
import { LogOutWrap, LogOutButton } from 'components/UserMenu/UserMenu.styled';

function UserLogOut() {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <LogOutWrap>
      <p> {`Welcome, ${user}`}</p>
      <LogOutButton type="button" onClick={handleLogOut}>
        Log Out
      </LogOutButton>
    </LogOutWrap>
  );
}

export default UserLogOut;
