import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import {Link as MUILink} from '@mui/material/';
import {Box, Typography,TextField, Button, Divider, Checkbox} from '@mui/material/';

const UserEdit = () => {
  const initState = {firstname:'', lastname:'', username:'', password:'', email:'',image:'', address:'', city:'', street:'', number:'', zipcode:''}
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
        navigate(`/users/${user._id}`);
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
    navigate(`/users`);
  }

  return (
    <div>
      UserEdit
    </div>
  );
};

export default UserEdit;