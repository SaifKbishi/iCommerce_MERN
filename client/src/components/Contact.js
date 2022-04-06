import React from 'react';
import {Container, Box, Typography, Paper, TextField, Button} from '@mui/material/';


const Contact = () => {
  return (
    <div style={{height:'70vh'}}>
    <Container sx={{boxShadow: 3, width:'800px', mt:15, }}>
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
          <Typography variant='h4'>Contact us form</Typography>
        </Paper >
        <TextField id="fullname" label="Full Name" variant="outlined" required/>
        <TextField id="email" label="Email" variant="outlined" required/>

        <TextField
          id="standard-textarea"
          label="Your message"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <Button variant="contained">Submit</Button>
      </Box>
    </Container>
    </div>
  );
};

export default Contact;

