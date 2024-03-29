import React,{useState,useEffect} from "react";
import { AppBar,Typography,Toolbar,Button,Avatar } from "@material-ui/core";
import useStyles from './styles';
import logo from '../../images/logo.png';
import {Link, useNavigate,useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import decode from 'jwt-decode'

import * as actionTypes from '../../constants/actionTypes'



const NavBar = ( ) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(()=>{
      const token = user?.token
      if(token){
        const decodeToken = decode(token) 
        if(decodeToken.exp * 1000 < new Date().getTime()) logout()
      }
      setUser(JSON.parse(localStorage.getItem('profile')))

    },[location])

    const logout = () => {
      dispatch({type:actionTypes.LOGOUT})
      history('/')
      setUser(null)
    }

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
          {user?(
            <div className={classes.profile}>
              <Avatar  className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
              <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>

            </div>

          ):(
            <Button component={Link} to="/auth" variant="contained" className={classes.logout} color="primary" >SignIn</Button>

          )}


        </Toolbar>
      </AppBar>
    )
    
    
    

}
export default NavBar;