import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import {Link as MUILink} from '@mui/material/';
import {Box, Typography, Button, Divider, Checkbox,CardMedia} from '@mui/material/';

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const getUserDetails = async()=>{
      try {
        const responseData = await axios.get(`/v2/users/${params.id}`);
        setUser(responseData.data);
      } catch (error) {
        console.log(`could not fetch user details. ${error}`)
      }
    }
    getUserDetails();
  },[]);

  return (
    <Box sx={{mt:15}}>
      <Typography>Full name: {user.fullname}</Typography>
      <Typography>Phone number: {user.phonenumber}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Address: {user.address}</Typography>
      <CardMedia sx={{maxWidth:455}}
        component="img"
        height="140"
        width="140"
        image={user.image}
        alt="green iguana"
      />
    </Box>
  );
};

export default UserInfo;