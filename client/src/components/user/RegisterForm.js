import React, { useState} from 'react';
import {Box, Typography, Button, Divider, Checkbox} from '@mui/material/';
import TextInput  from '../../components/utils/TextInput';

const RegisterForm = () => {
  const initialState = {firstname:'', amount:'', description:'', repeats:'', date:'', expenseType:'expense', expense:'expense', income:'income' };
  const [register, setRegister] = useState(initialState); 

  const handleChange = (e)=>{
    console.log(e.target.value,' ', e.target.name);
    setRegister({...register,[e.target.name]:e.target.value});
  }
  return (
    <>      
      <Box sx={{width:{xs:'90%' ,md:'650px'}}}>
        <Typography sx={{fontSize:{xs:'20px', md:'40px'}, m:1, fontWeight:'bold'}}>
          Getting your order
        </Typography>
        <Divider />
        <Typography sx={{fontSize:{xs:'15px', md:'40px'}, m:1, }}>
          Shipping information
        </Typography>
        <TextInput T_htmlFor="firstname" T_labelText='First Name' T_FW_sx01='fontWeight' T_FW_sx02='bold' TF_ID='firstname' TF_label='First Name' TF_required={true} TF_size='small' />        
        <TextInput T_htmlFor="lastname" T_labelText='Last Name' T_FW_sx01='fontWeight' T_FW_sx02='bold' TF_ID='lastname' TF_label='Last Name' TF_required={true} TF_size='small' />
        <TextInput T_htmlFor="address" T_labelText='Address' T_FW_sx01='fontWeight' T_FW_sx02='bold' TF_ID='address' TF_label='Address' TF_required={true} TF_size='small' />
        <TextInput T_htmlFor="city" T_labelText='City' T_FW_sx01='fontWeight' T_FW_sx02='bold' TF_ID='city' TF_label='City' TF_required={true} TF_size='small' />
        <TextInput T_htmlFor="zipcode" T_labelText='Zip Code' T_FW_sx01='fontWeight' T_FW_sx02='bold' TF_ID='zipcode' TF_label='Zip Code' TF_required={true} TF_size='small' />
        <Divider sx={{my:1, width:'100%'}}/>
        <Typography sx={{fontSize:{xs:'15px', md:'25px'}, m:1, fontWeight:'bold'}}>Contact Information</Typography>
        <TextInput T_htmlFor="email" T_labelText='Email Address' T_FW_sx01='fontWeight' T_FW_sx02='bold' TF_ID='email' TF_label='Email Address' TF_required={true} TF_size='small' />        
        <TextInput T_htmlFor="phonenumber" T_labelText='Phone Number' T_FW_sx01="{{fontWeight:'bold'}}" T_FW_sx02='bold' TF_ID='phonenumber' TF_label='Phone Number' TF_required={true} TF_size='small' />
        <Box>
          <Checkbox size='small' />Text me updates about my iCommerce order.
        </Box>
        <Button variant="contained" sx={{my:3}} data-testid='checkoutBtn10'>Continue to Payment Information</Button>
      </Box>
    </>
  );
};

export default RegisterForm;

