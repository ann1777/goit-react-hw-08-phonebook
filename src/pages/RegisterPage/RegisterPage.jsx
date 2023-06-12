import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/auth-operations';
import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { ValidationMessage, NavLinkStyled } from './RegisterPage.styled';
import { registerValidationSchema } from 'utils/YupValidationSchemas';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#608B38',
    },
  },
});

export function RegisterPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  let nameInputId = nanoid(3);
  let emailInputId = nanoid(3);
  let passwordInputId = nanoid(3);
  const onSignUp = location.pathname === '/register';
  const [empty, setEmpty] = useState({ name: false, email: false });
  const [passwordValid, setPasswordValid] = useState({ password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    //console.log('form reg user: ', user);

    if (user.name === '') {
      setEmpty(prev => ({ ...prev, name: true }));
      return;
    }
    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }

    if (user.password.length < 7 && user.password === '') {
      setPasswordValid(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(registerUserThunk(user));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registerValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { name, email, password } = values;
        handleSubmit({ name, email, password });
        resetForm();
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{
            height: '100vh',
            width: '100vh',
            backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa50c798859809.5ee5fbc812ec0.png")`,
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
            sy={{
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
              <Avatar sx={{ m: 1, bgColor: 'primary.main', boxShadow: 3 }}>
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
                SignUp
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 5 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id={`id-${nameInputId}`}
                      label="Name"
                      autoComplete="given-name"
                      name="name"
                      autoFocus
                      error={empty.name}
                      sx={{ boxShadow: 3 }}
                    />
                    <ErrorMessage name="name" component={ValidationMessage} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id={`id-${emailInputId}`}
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={empty.email}
                      sx={{ boxShadow: 3 }}
                      helperText={
                        'Example of valid email address: qwerty1@example.com'
                      }
                    />
                    <ErrorMessage name="name" component={ValidationMessage} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id={`id-${passwordInputId}`}
                      autoComplete="new-password"
                      sx={{ boxShadow: 3 }}
                      //inputProps={{ minLength: 7 }}
                      error={passwordValid.length < 7}
                      onChange={e => setPasswordValid(e.target.value)}
                      helperText={'Password should contains at least 7 symbols'}
                    />
                    <ErrorMessage name="name" component={ValidationMessage} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    {onSignUp && (
                      <NavLinkStyled to={`/login`} variant="body2">
                        Already have an account? Sign in
                      </NavLinkStyled>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Formik>
  );
}
