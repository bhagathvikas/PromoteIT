import React,{useState,useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import logo from '../src/images/logo.png';
import Posts from './components/Posts/Posts.js';

import {getPosts} from './actions/posts'
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import Form from './components/Form/Forms.js';

const App = ()=>{
  const [currentId,setCureentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);
  return(
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCureentId={setCureentId}  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCureentId={setCureentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
}


export default App;