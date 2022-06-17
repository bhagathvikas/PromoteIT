import React,{useState} from "react";
import {Avatar,Button,Paper,Grid,Typography,Container, TextField} from '@material-ui/core';
import useStyle from './style';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Input from './input'

const Auth = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [isSignUp,setisSignUp] = useState(false)

    const classes = useStyle()
    
    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () =>{

    }
    const handleChange = () =>{

    }
    const switchMode = () =>{
        setisSignUp((prevIsSignUp)=> !prevIsSignUp)
        handleShowPassword(false)

    }
    return (
        <Container component="main" maxWidth="xs">
       <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>

            <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">{isSignUp? 'SignUp' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit= {handleSubmit}>
            <Grid container spacing={2}>
                {
                    isSignUp && (
                        <>
                        <Grid xs={6} md={12}>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                        </Grid>
                        </>
                    )
                }
                <Input name="Email" label="Email" type="Email" handleChange={handleChange} autoFocus half/>
                <Input name="Password"  label="First Name" handleChange={handleChange} type={showPassword?'text':'password' } handleShowPassword={handleShowPassword}/>
                {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
            </Grid>
            <Button type="submit" className={classes.submit} fullWidth variant="contained" color="primary"> {isSignUp ? "SignUp" : "SignIn"} </Button>

            <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>


        </form>


       </Paper>
       </Container>

    )
}
export default Auth;