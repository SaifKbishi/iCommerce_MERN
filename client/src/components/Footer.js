import React from 'react';
import {Link as MUILink} from '@mui/material/';
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {Box,Typography,} from '@mui/material/';

const Footer = () => {
  return (
    <Box sx={{display: 'flex', justifyContent:'center', background:'#C2CAD0', mt:10}}>
      <MUILink component={RouterLink} to="/" color="inherit" underline="none" sx={{ my: 3, mx:2, color: 'success', display: 'block' }} textAlign="center">
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ display: { xs: 'flex', sm: 'block' }, flexGrow:1}}
        >iAmazon</Typography>
      </MUILink>
      <MUILink component={RouterLink} to="/" color="inherit" underline="none" sx={{ my: 3, mx:2, color: 'success', display: 'block' }} textAlign="center">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
        >Conditions of Use</Typography>
      </MUILink>
      <MUILink component={RouterLink} to="/" color="inherit" underline="none" sx={{ my: 3, mx:2, color: 'success', display: 'block' }} textAlign="center">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
        >Privacy Notice</Typography>
      </MUILink>
      <MUILink component={RouterLink} to="/" color="inherit" underline="none" sx={{ my: 3, mx:2, color: 'success', display: 'block' }} textAlign="center">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
        >© 1996-2022, iAmazon.com, Inc. or its affiliates</Typography>
      </MUILink>
    </Box>
  );
};

export default Footer;