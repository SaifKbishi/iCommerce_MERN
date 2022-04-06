import React from 'react';
import {Container} from '@mui/material/';
import SmallBasket from '../sale/SmallBasket';
import RegisterForm from '../user/RegisterForm'

const Checkout = () => {
  return (
    <div style={{minHeight:'70vh'}}>
      <Container sx={{display:'flex', flexDirection:{xs:'column-reverse', sm:'row'}, my:12,p:1, alignItems: 'center' }}>
        <RegisterForm />      
        <SmallBasket/>        
      </Container>
    </div>
  );
};

export default Checkout;



