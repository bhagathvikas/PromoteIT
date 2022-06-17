import React from 'react'
import {TextField,Button ,Grid,InputAdornment ,IconButton} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/Visibility'


const input = ({name,half,label,type, autoFocus,handleShowPassword,handleChange}) => {
  return (
    <Grid item xs={12} sm={half?6 :12}>
        <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name==='password'&&{
            endAdornment:(
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type==='password' ?  <Visibility/>:<VisibilityOff/>}

                    </IconButton>
                
                </InputAdornment>
            )
        }}

        />

    </Grid>
  )
}

export default input