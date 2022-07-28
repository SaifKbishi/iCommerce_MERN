import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import {Link as MUILink} from '@mui/material/';
import {Box, Typography,TextField, Button, Divider, Checkbox, Tooltip,Container} from '@mui/material/';

const SignIn = () => {
  const initialState =   {username:'', password:''};
  const [signIn, setSignIn] = useState(initialState); 
  const navigate = useNavigate();
//http://localhost:3000/v2/users/626d3710b0b116eeb343cdb4/2

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log('14 login submit', signIn);
    const submitLoginDetails = async()=>{
      try {
        const responseData = await axios.post(`/v2/users/signin`, signIn);
        // console.log('responseData', responseData.data._id);
        navigate(`/v2/users/${responseData.data._id}/`);
      } catch (error) {
        console.log(`problem loggin in, could be user details not found or wrong details. ${error}`);
      }
    }
    submitLoginDetails();
  }
  const handleChange = (e)=>{
    console.log(e.target.value,' ', e.target.name);
    setSignIn({...signIn,[e.target.name]:e.target.value});
  }

  const handleCancel=()=>{
    navigate(`/v3/products`);
  }


  return (
    <Container sx={{display:'flex', flexDirection:{xs:'column-reverse', sm:'row'}, my:12,p:1, alignItems: 'center' }}>
      <Box sx={{width:{xs:'90%' ,md:'650px'}}}>        
        <Typography sx={{fontSize:{xs:'15px', md:'40px'}, m:1, }}>
          Signin details:
        </Typography>
        <form onSubmit={handleSubmit}>          
          <TextField label="User name" name="username" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/>
          <TextField label="Password" name="password" helperText="" onChange={handleChange} required={true} sx={{mb:1}}/><br/>
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
    </Container>
  );
};

export default SignIn;