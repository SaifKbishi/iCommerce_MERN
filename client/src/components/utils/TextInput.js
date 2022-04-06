import React from 'react';
import { Typography, TextField} from '@mui/material/';

const TextInput = ({T_htmlFor, T_labelText,TF_ID, TF_label,TF_required, TF_size, T_FW_sx01, T_FW_sx02, onChange}) => {
  // console.log(T_FW_sx01);
  return (
    <div>    
      <Typography htmlFor={T_htmlFor} sx={{fontWeight:'bold'}}>{T_labelText}</Typography>
      <TextField id={TF_ID} label={TF_label} required={TF_required} size={TF_size} onChange={onChange}/>
    </div>
  );
};

export default TextInput;