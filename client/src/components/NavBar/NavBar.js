import React from "react";
import { AppBar,Typography } from "@material-ui/core";
import useStyles from './styles';
import logo from '../../images/logo.png'

const NavBar = ( ) => {
    const classes = useStyles();
    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
      </AppBar>
    )
    
    
    

}
export default NavBar;