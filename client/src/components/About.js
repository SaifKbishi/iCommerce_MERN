import React from 'react';
import {Container, Box, Typography,Paper} from '@mui/material/';

const About = () => {
  return (
    <div style={{height:'70vh'}}>
    <Container sx={{boxShadow: 3, mt:15, width:'800px',}}>
      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 600,
            height: '100%',
          },
        }}
      >
        <Paper elevation={3} sx={{p:1}}>
          <Typography variant='h4'>Who am I </Typography>
        </Paper >
        <Paper elevation={3} sx={{p:1}}>
          <Typography >This is my fake e-ecommerce site, to demo simplicity use of React-Redux. 
          And bring into action the use of MUI styling.</Typography>
        </Paper >     
        <Paper elevation={2} sx={{p:1}}>
          <Typography >Take the visitors on your website to a trip down memory lane, and give them an insight to the history behind your store. Here, you can show them where, how, and when you started, and everything your business has accomplished on the way. This is your chance to share your relevant milestones and achievements relating to your business in an engaging way.

You can even choose to present your history to your viewers in the form of a timeline, which allows you to display a large amount of information in a visually engaging manner. Your customers or potential customers might be interested in seeing how you grew over the years.</Typography>
        </Paper >     
      </Box>

    </Container>
    </div>
  );
};

export default About;