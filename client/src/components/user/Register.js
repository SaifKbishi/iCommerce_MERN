import React from 'react';
import RegisterForm from './RegisterForm';
import {Container } from '@mui/material/';

const Register = () => {
  return (
    <div style={{minHeight:'70vh'}}>
      <Container sx={{display:'flex', flexDirection:{xs:'column-reverse', sm:'row'}, my:12,p:1, alignItems: 'center' }}>
        <RegisterForm />
      </Container>
    </div>
  );
};

export default Register;