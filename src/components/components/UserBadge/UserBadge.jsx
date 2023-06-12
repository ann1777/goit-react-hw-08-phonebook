import { useDispatch, useSelector } from 'react-redux';
import { logOutUserThunk } from 'redux/auth/auth-operations';
import { StyledBadge, Wrapper } from './UserBadge.styled';
// import { useAuth } from 'redux/auth/useAuth';
import { Chip } from '@mui/material';
import { currentUser } from 'redux/auth/auth-selectors';
// import { Avatar } from '@mui/material';
export const UserBadge = () => {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);

  const handleLogOut = () => dispatch(logOutUserThunk());

  return (
    <Wrapper>
      {user && <p>Welcome, {user.name}</p>}
      <Chip
        avatar={
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          ></StyledBadge>
        }
        label="LogOut"
        variant="outlined"
        onClick={handleLogOut}
        sx={{
          border: '1px solid #dfcece',
          color: '#000000',
          textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
          boxShadow: 3,
        }}
      />
    </Wrapper>
  );
};
