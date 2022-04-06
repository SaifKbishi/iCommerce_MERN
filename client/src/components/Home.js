import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  createTheme, ThemeProvider} from '@mui/material/styles';
import Products from './product/Products';

const Home = () => {
  return (
    <div className="hero" >
      <Card sx={{ width: '100%',  mt:10 }}>        
        <CardContent>
          <Box className="container" sx={{position: 'absolute', color:'#afd275'}}>
          <ThemeProvider theme={typoTheme}>
            <Typography gutterBottom variant="h1" component="div" sx={{fontWeight:'bold', }}>
              NEW COLLECTION IS HERE
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={typoThemeh3}>
            <Typography variant="h3" color="#7E685A" >
              CHECKOUT MODREN STYLES
            </Typography>
          </ThemeProvider>
          </Box>
          <CardMedia
            component="img"
            height="100%"
            image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            // image="https://image.shutterstock.com/image-photo/businessman-on-blurred-background-using-600w-566874976.jpg"
            alt="shutterstock image"
          />
        </CardContent>
      </Card>
      <Products/>
    </div>
  );
};

export default Home;

const icommerce = createTheme({
  palette: {
    primary: {
      main: '#C2CAD0',
    },
    secondary: {
      main: '#C2B9B0',
      contrastText: '#ffcc00',
    },
    error:{
      main: '#b90e0a'
    },
    info:{
      main: '#c2b9b0'
    },
    success:{
      main: '#E7717D'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  text:{
    primary:{
      color: '#7e685a'
    },
    secondary:{
      color:'#afs275'
    },
    disabled:{},
  }
});

let typoTheme = createTheme();
let typoThemeh3 = createTheme();
// typoTheme = responsiveFontSizes(typoTheme);

typoTheme.typography.h1 = {
  fontSize: '2.2rem',
  '@media (min-width:380px)': {
    fontSize: '2.5rem',
  },
  [typoTheme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
};

typoThemeh3.typography.h3 = {
  fontSize: '1.5rem',
  '@media (min-width:380px)': {
    fontSize: '2.5rem',
  },
  [typoThemeh3.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};