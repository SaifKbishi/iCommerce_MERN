import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import {Link as MUILink} from '@mui/material/';
import {Box, Typography, Button, Divider, Checkbox,CardMedia,Container, Stack, InputLabel, Avatar } from '@mui/material/';
import {Tab, Tabs} from '@mui/material/';
import PropTypes from 'prop-types';

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

  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event, newValue)=>{
    setTabValue(newValue);
  }

  const TabPanel=(props)=>{
    const {children, value, index, ...other} = props;
    return (
      <div 
        role='tabpanel'
        hidden={value !== index}
        id={`tabpanel_${index}`}
        aria-label={`tab_${index}`}
        {...other}
        >
          {value === index && (
            <Box sx={{p:3}}>
              <Typography component={'span'}>{children}</Typography>
            </Box>
          )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function itemProps(index) {
    return {
      id: `crm-tab-${index}`,
      'aria-controls': `crm-tabpanel-${index}`,
    };
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: '#880000',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
  return (
    <Container sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, my:12,p:1, alignItems: 'center' }}>
    <Box >      
      <Typography variant="h5">CRM</Typography>
      <Divider/>
      <Box sx={{maxWidth:{xs:300, md:'100%'}, display:'flex', flexWrap:'wrap'}}>
        <Tabs id="tabsHere" value={tabValue} onChange={handleTabChange} aria-label="CRM tabs" sx={{display:'flex', flexWrap:'wrap'}}>
          <Tab label='personal details' {...itemProps('personal details')}/>
          <Tab label='Orders' {...itemProps('Orders')}/>
          <Tab label='Payment methods' {...itemProps('Payment methods')}/>
          <Tab label='History' {...itemProps('History')}/>
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
          <Box id='personalImage' sx={{minWidth:200, p:2}}>
            {user.image ?                
                <CardMedia sx={{maxWidth:455}}
                  component="img"
                  height="140"
                  width="140"
                  image={user.image}
                  alt={user.fullname}
                />
              :
                <Avatar {...stringAvatar(`${user.fullname} `)} />
            }
            <Button variant="text" >{user.image ? 'change image':'set image'}</Button>
          </Box>
          <Box id="personalDetails" sx={{p:2}}>
            <Box sx={{display:{xs:'flex', md:'flex'}}}>
              <Typography sx={{minWidth:130, fontWeight:'bold'}}>Full name: </Typography>
              <Typography>{user.fullname}</Typography>
            </Box>
            <Box sx={{display:{xs:'flex', md:'flex'}}}>
              <Typography sx={{minWidth:130, fontWeight:'bold'}}>Phone number: </Typography>
              <Typography>{user.phonenumber}</Typography>
            </Box>
            <Box sx={{display:{xs:'flex', md:'flex'}}}>
              <Typography sx={{minWidth:130, fontWeight:'bold'}}>Email: </Typography>
              <Typography>{user.email}</Typography>
            </Box>
            <Box sx={{display:{xs:'flex', md:'flex'}}}>
              <Typography sx={{minWidth:130, fontWeight:'bold'}}>Address: </Typography>
              <Typography>{user.address}</Typography>
            </Box>            
            <Box sx={{display:{xs:'flex', md:'flex'}, mt:9}}>
              <Stack spacing={2} direction="row">
                <MUILink component={RouterLink} to={`/v2/users/${user._id}/edit`} color="inherit" underline="hover"                 
                  sx={{ py:1, color: 'black', display: 'block' }} textAlign="center" 
                  >Edit</MUILink>
                <Button variant="contained">Just a button</Button>
              </Stack>
            </Box>
            
          </Box>
        </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography>Your active orders are here</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Typography>Your active payment methods are here</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Typography>Your order history</Typography>
        </TabPanel>
    </Box>
    </Container>
  );
};

export default UserInfo;