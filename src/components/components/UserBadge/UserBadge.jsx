import { useDispatch } from 'react-redux';
import { logOutUserThunk } from 'redux/auth/auth-operations';
import { StyledBadge, Wrapper } from './UserBadge.styled';
// import { useAuth } from 'redux/auth/useAuth';
import { Chip } from '@mui/material';
// import { Avatar } from '@mui/material';
export const UserBadge = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutUserThunk());

  return (
    <Wrapper>
      <Chip
        avatar={
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            {/* <Avatar
              alt="avatar"
              src={`https://source.unsplash.com/1200x1200?${user.name}`}
              sx={{ width: 24, height: 24 }}
            /> */}
          </StyledBadge>
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
