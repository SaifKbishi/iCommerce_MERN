import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Box, Typography, Divider,Button} from '@mui/material/';
import {delCart}  from '../../redux/action';

const SmallBasket = () => {
  const state = useSelector((state)=> state.handleCart);
  const dispatch = useDispatch();

  const deleteProduct = (product)=>{
    dispatch(delCart(product));
  }

  const cartItems = (cartItem)=>{
    return(
      <Box sx={{display:'flex', flexDirection:{xs:'row', sm:'row'}, p:1, alignItems: 'center' }} key={cartItem._id}>
        <Box >
          <img
          src={`${cartItem.image}`}          
          alt={cartItem.title}
          loading="lazy"
          width='50px'
        />
        </Box>
        <Box sx={{flexGrow:1}}>
          <Typography sx={{m:1, p:1, fontSize:{xs: '0.5rem', sm:'1rem'}, maxWidth:'200px', }}>
            {cartItem.title.substring(0,40)}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight:'bold'}}>
            {cartItem.price}$ 
          </Typography>
          <Typography sx={{ fontWeight:'bold'}}>
            Qty: {cartItem.qty}
          </Typography>
          <Button size="small" onClick={()=>deleteProduct(cartItem)}>Remove</Button>
        </Box>       
      </Box>
    );
  }

  const basketTotal =()=>{
    let sum=0;
    state.forEach((item)=>{
      sum+= item.price * item.qty
    })
    return sum;
  }

  return (
    <Box sx={{display:'flex', alignSelf:'flex-start', flexDirection:'column'}}>
      <Typography sx={{fontWeight:'bold', mx:2, }}>Order summary</Typography>
      <Box sx={{border:2, mx:2, width:'300px'}}>
        <Typography sx={{fontWeight:'bold',p:1}}>Shipping</Typography>
          {state.length !== 0 && state.map(cartItems)}        
        <Divider sx={{my:1, width:'100%'}}/>
        <Typography sx={{px:1}}>Item Subtotal</Typography>
        <Divider sx={{my:1, width:'90%'}}/>
        <Box sx={{display:'flex', justifyContent:'space-between', p:1}}>
          <Typography variant="h4" sx={{px:1}}>Total </Typography>
          <Typography variant="h4" sx={{px:1}}>${basketTotal()}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallBasket;