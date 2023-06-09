import { Grid } from '@mui/material';
import { ThemeProvider } from 'components/ThemeProvider/ThemeProvider';
import Header  from 'components/components/Header/Header';
import React from 'react';

const HomePage = () => {
  return (

	<ThemeProvider>
	<Header/>
	<Grid
	  container
	  component="main"
	  sx={{
		height: '100vh',
		width: '100vh',
		backgroundImage: `url("https://img.gadgethacks.com/img/84/37/63770368769498/0/android-12s-upgraded-search-gives-you-quick-access-contacts-app-shortcuts-phone-settings-and-more.1280x600.jpg")`,
		backgroundRepeat: 'no-repeat',
		backgroundColor: c =>
		  c.palette.mode === 'light'
			? c.palette.grey[100]
			: c.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	  }}
	>

	</Grid>
	</ThemeProvider>
  );
};

export default HomePage;
