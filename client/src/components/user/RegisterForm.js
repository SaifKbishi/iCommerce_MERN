import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import {Link as MUILink} from '@mui/material/';
import {Box, Typography,TextField, Button, Divider, Checkbox, Tooltip} from '@mui/material/';

const RegisterForm = () => {
  // const initialState =   {name:{firstname:'', lastname:'',}, username:'', password:'', phonenumber:'', email:'', image:'', address:{country:'',city:'', street:'', number:'',zipcode:'',},};
  const initialState =   {fullname:'', phonenumber:'', email:'', image:'', address:'',};
  const [register, setRegister] = useState(initialState); 
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    const submitUserDetails =async()=>{
      try {
        const responseData = await axios.post(`/v2/users`, register);
        navigate(`/users/${responseData.data._id}`);
      } catch (error) {
        console.log(`Error registering your Info. ${error}.`)
      }
    }
    submitUserDetails();

  }

  const handleChange = (e)=>{
    console.log(e.target.value,' ', e.target.name);
    setRegister({...register,[e.target.name]:e.target.value});
  }

  const handleCancel=()=>{
    navigate(`/products`);
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
        <form onSubmit={handleSubmit}>          
          {/* <TextField label="First Name" name="firstname" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/> */}
          {/* <TextField label="Last Name" name="lastname" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/> */}
          <TextField label="Full Name" name="fullname" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/>
          {/* <TextField label="User name" name="username" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/> */}
          {/* <TextField label="Password" name="password" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/> */}
          <TextField label="Address" name="address" helperText="" onChange={handleChange} required={false} sx={{mb:0.5}}/><br/>
          {/* <TextField label="Country" name="country" helperText="" onChange={handleChange} required={false} sx={{mb:0.5}}/><br/> */}
          {/* <TextField label="City" name="city" helperText="" onChange={handleChange} required={false} sx={{mb:1}}/><br/> */}
          {/* <TextField label="Street" name="street" helperText="" onChange={handleChange} required={false} sx={{mb:0.5}}/><br/> */}
          {/* <TextField label="Number" name="number" helperText="" onChange={handleChange} required={false} sx={{mb:0.5}}/><br/> */}
          {/* <TextField label="Zip Code" name="zipcode" helperText="" onChange={handleChange} required={false} sx={{mb:1}}/><br/> */}
          <TextField label="Image URL" name="image" helperText="" onChange={handleChange} required={false} sx={{mb:1}}/><br/>
          <Divider sx={{my:1, width:'100%'}}/>
          <Typography sx={{fontSize:{xs:'15px', md:'25px'}, m:1, fontWeight:'bold'}}>Contact Information</Typography>
          <TextField label="Email Address" name="email" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/>
          <TextField label="Phone Number" name="phonenumber" helperText="" onChange={handleChange} required={true}/><br/>
          <Box>
            <Checkbox size='small' />Text me updates about my iCommerce order.
          </Box>
          <Box>
            <Tooltip title="Submit & Continue to Payment Information">
              <Button variant="contained" type="submit" sx={{my:3}} data-testid='checkoutBtn10'>Submit</Button>
            </Tooltip>
            <Tooltip title="Cancel and discard basket">
              <Button variant="contained" sx={{m:0.5, flexGrow:1}} onClick={()=>handleCancel()}>Cancel</Button>
            </Tooltip>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default RegisterForm;

