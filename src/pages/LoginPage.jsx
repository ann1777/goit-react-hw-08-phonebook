import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUserThunk } from '../redux/auth/auth-operations';
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
import {
  ThemeProvider,
} from 'components/ThemeProvider/ThemeProvider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
//   const navigate = useNavigate();

  const onSignIn = location.pathname === '/login';

  const [empty, setEmpty] = useState({ email: false, password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };

    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }
    if (user.password === '') {
      setEmpty(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(logInUserThunk(user));
  };
  // const handleSubmit = e => {
  // 	e.preventDefault()
  // 	const form = e.target
  // 	const email = form.email.value
  // 	const password = form.password.value
  // 	const credentials = {
  // 		email,
  // 		password,
  // 	}

  // 	dispatch(logInUserThunk(credentials)).then(() => navigate('/contacts'))

  // 	form.reset()
  // }

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
          backgroundColor: c =>
            c.palette.mode === 'light'
              ? c.palette.grey[100]
              : c.palette.grey[900],
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
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={empty.email}
                  sx={{ boxShadow: 3 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
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

              <Grid container >
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
};
// <div className='flex justify-center items-center h-screen bg-darkMain'>
// 	<form
// 		className='flex gap-6 text-white flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg'
// 		onSubmit={handleSubmit}
// 	>
// 		<h1 className='text-center text-2xl'>Login Form</h1>
// 		<input
// 			className='border px-2 text-black'
// 			name='email'
// 			placeholder='Email...'
// 			type='text'
// 		/>
// 		<input
// 			className='border px-2 text-black'
// 			name='password'
// 			placeholder='Password...'
// 			type='password'
// 		/>
// 		<button className='border bg-blue-600 rounded-md'>Login</button>
// 	</form>
// </div>

// import { useDispatch } from 'react-redux'
// import { logInUserThunk } from '../redux/auth/auth-operations';
// import { useNavigate } from 'react-router-dom'

// export const LoginPage = () => {
// 	const dispatch = useDispatch()
// 	const navigate = useNavigate()
// 	const handleSubmit = e => {
// 		e.preventDefault()
// 		const form = e.target
// 		const email = form.email.value
// 		const password = form.password.value
// 		const credentials = {
// 			email,
// 			password,
// 		}

// 		dispatch(logInUserThunk(credentials)).then(() => navigate('/phonebook'))

// 		form.reset()
// 	}

// 	return (
// 		<div className='flex justify-center items-center h-screen bg-darkMain'>
// 			<form
// 				className='flex gap-6 text-white flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg'
// 				onSubmit={handleSubmit}
// 			>
// 				<h1 className='text-center text-2xl'>Login Form</h1>
// 				<input
// 					className='border px-2 text-black'
// 					name='email'
// 					placeholder='Email...'
// 					type='text'
// 				/>
// 				<input
// 					className='border px-2 text-black'
// 					name='password'
// 					placeholder='Password...'
// 					type='password'
// 				/>
// 				<button className='border bg-blue-600 rounded-md'>Login</button>
// 			</form>
// 		</div>
// 	)
// }

