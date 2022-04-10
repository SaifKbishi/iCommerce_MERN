import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {delCart} from '../../redux/action/index';
import {useNavigate} from 'react-router-dom'
import {Container, Box, Typography, Button, Rating  } from '@mui/material/';

const Cart = () => {
  const state = useSelector((state)=> state.handleCart);//handleCart from the reducer
  console.log('Cart state', state)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeToCheckOut =()=>{
    let path = `/checkout`; 
    navigate(path);
  }

  const cartItems = (cartItem)=>{
    console.log('cartItem',cartItem)
    return(
      <Container sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, my:2,p:1, background:'rgba(194, 202, 208, 0.3)', borderRadius:'20px', alignItems: 'center' }} key={cartItem.id}>
        <Box >
          <img
          src={`${cartItem.image}`}          
          alt={cartItem.title}
          loading="lazy"
          width='250px'
        />
        </Box>
        <Box>
          <Typography variant="h2" sx={{m:4, p:2, fontSize:{xs: '2rem', sm:'3rem'}}}>
            {cartItem.title}
          </Typography>
          <Typography variant="h5" sx={{m:4, p:2, fontWeight:'bold'}}>
            {cartItem.qty} X {cartItem.price}$ = {cartItem.qty * cartItem.price}$
          </Typography>
        </Box>       
      </Container>
    );
  }

  return (
    <div style={{minHeight:'70vh'}}>
    <Box sx={{mt:{xs:6, md:13}, display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
      {state.length === 0 && <Typography variant="h2" sx={{mt:5}}>Your Cart is empty</Typography>}
      <Box sx={{ my:1 }}>
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && <Button variant="contained" sx={{ml:2}} onClick={()=>routeToCheckOut()}>Proceed to checkout</Button>}
      </Box>
    </Box>
    </div>
  );
};

export default Cart;