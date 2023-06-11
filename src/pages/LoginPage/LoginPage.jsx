import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUserThunk } from '../../redux/auth/auth-operations';
import { Link, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { ThemeProvider } from 'components/ThemeProvider/ThemeProvider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import { nanoid } from 'nanoid';
import { ErrorMessage, ValidationMessage } from 'components/ContactsForm/ContactsForm.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  //   const navigate = useNavigate();

  const onSignIn = location.pathname === '/login';

  const [empty, setEmpty] = useState({ email: false, password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(logInUserThunk(data));
    setEmpty(data);
  };
  let emailInputId = nanoid(3);
  let passwordInputId = nanoid(3);

  return (
    <ThemeProvider>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          width: '100vh',
          backgroundImage: `url("https://untree.co/wp-content/uploads/2022/01/modern-login-signup-form.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={6} md={7} />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100vh',
            background: '#ffffffb0',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: 'primary.main',
                boxShadow: 3,
                color: '#fff',
                // color: '#00000031',
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: 'primary.main',
                textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
              }}
            >
              SignIn
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id={`id-${emailInputId}`}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  autoFocus
                  error={empty.email}
                  sx={{ boxShadow: 3 }}
                />
                <ErrorMessage name="email" component={ValidationMessage} />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id={`id-${passwordInputId}`}
                  autoComplete="current-password"
                  error={empty.password}
                  sx={{ boxShadow: 3 }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                >
                  Sign In
                </Button>
              </Grid>

              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  {onSignIn && (
                    <Link to={`/registration`} variant="body2" color="primary">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

