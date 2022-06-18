import React,{useState} from "react";
import {Avatar,Button,Paper,Grid,Typography,Container, TextField} from '@material-ui/core';
import useStyle from './style';
import { GoogleLogin } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useNavigate} from 'react-router-dom'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Icon from './icon'
import Input from './input'
import {useDispatch} from 'react-redux'

const initialState={firstName:'',lastName:'', Email:'',Password:'',confimPassword:''};
const Auth = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [isSignUp,setisSignUp] = useState(false)
    const [formData,setFormData] = useState(initialState)

    const classes = useStyle()
    const history = useNavigate()
    const dispatch = useDispatch()
    
    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)

    }
    const handleChange = (e) =>{
        setFormData({...formData,[e.traget.name]: e.traget.value})

    }
    const switchMode = () =>{
        setisSignUp((prevIsSignUp)=> !prevIsSignUp)
        handleShowPassword(false)

    }
    const googleSuccess= async(res)=>{
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type:'AUTH',data:{result ,token}})
            history.push('/')
            
        } catch (error) {
            console.log(error)
            
        }



    }
    const googleFailure=(error)=>{
        console.log(error)
        console.log("google sign failed")
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
                        <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half/>
                        </Grid>
                        </>
                    )
                }
                <Input name="Email" label="Email" type="Email" handleChange={handleChange} autoFocus half/>
                <Input name="Password"  label="Password " handleChange={handleChange} type={showPassword?'text':'password' } handleShowPassword={handleShowPassword}/>
                {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
            </Grid>
            <Button type="submit" className={classes.submit} fullWidth variant="contained" color="primary"> {isSignUp ? "SignUp" : "SignIn"} </Button>
            
            <GoogleLogin
            clientId="703614928021-ls4p7aesao9j9huplqcopn9h8ts2q9i6.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            
            cookiePolicy="single_host_origin"
          />

           

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