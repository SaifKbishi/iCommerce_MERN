import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import {Link as MUILink} from '@mui/material/';
import {Box, Typography,TextField, Button, Divider, Checkbox,Container} from '@mui/material/';

const UserEdit = () => {
  // const initState = {firstname:'', lastname:'', username:'', password:'', email:'',image:'', address:'', city:'', street:'', number:'', zipcode:''}
  const initState = {fullname:'', phonenumber:'', email:'', image:'', address:'', username:'', password:''};
  const [user, setUser] = useState(initState);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const getUser = async ()=>{
      try {
        const responseData = await axios.get(`/v2/users/${params.id}`);
        setUser(responseData.data);
      } catch (error) {
        console.log(`Error fetching User details. Error:${error}`)
      }
    }
    getUser();
  }, [params.id]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const postUser =async()=>{
      try {
        const responseData = await axios.patch(`/v2/users/${user._id}`, user);
        navigate(`/v2/users/${user._id}`);
      } catch (error) {
        console.log(`Error editing this user. Error:${error}`)
      }
    }
    postUser();
  }

  const handleChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleCancel=()=>{
    // navigate(`/users`);
    navigate(`/v2/users/${user._id}`);
  }

  return (
    <Container sx={{display:'flex', flexDirection:{xs:'column', sm:'column'}, my:12,p:1, alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
      <Box sx={{display:{xs:'flex', md:'flex'}}}>
        <Typography sx={{width:140, fontWeight:'bold', py:1}}>Full name: </Typography>
        <TextField 
          name='fullname'
          value={user.fullname}
          onChange={handleChange}
          inputProps={{
            style: {
              padding: 5
            }
         }}
        />
      </Box>
      <Box sx={{display:{xs:'flex', md:'flex'}}}>
        <Typography sx={{minWidth:140, fontWeight:'bold', py:1}}>Phone number: </Typography>
        <TextField 
          name='phonenumber'
          value={user.phonenumber}
          onChange={handleChange}
          inputProps={{
            style: {
              padding: 5
            }
         }}
        />
      </Box>
      <Box sx={{display:{xs:'flex', md:'flex'}}}>
        <Typography sx={{minWidth:140, fontWeight:'bold', py:1}}>Email: </Typography>
        <TextField 
          name='email'
          value={user.email}
          onChange={handleChange}
          inputProps={{
            style: {
              padding: 5
            }
         }}
        />
      </Box>
      <Box sx={{display:{xs:'flex', md:'flex'}}}>
        <Typography sx={{minWidth:140, fontWeight:'bold', py:1}}>Address: </Typography>
        <TextField 
          name='address'
          value={user.address}
          onChange={handleChange}
          inputProps={{
            style: {
              padding: 5
            }
         }}
        />
      </Box>
      <Box sx={{display:'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" sx={{m:0.5, flexGrow:1}} onClick={()=>handleCancel()}>Cancel</Button>
        <Button variant="contained" type="submit" sx={{m:0.5, flexGrow:1}} >Submit</Button>
      </Box>
      </form>
    </Container>
  );
};

export default UserEdit;