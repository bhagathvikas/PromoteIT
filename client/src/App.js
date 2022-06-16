import React,{useState,useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import logo from '../src/images/logo.png';
import Posts from './components/Posts/Posts.js';

import {getPosts} from './actions/posts'
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import Form from './components/Form/Forms.js';
import NavBar from '../src/components/NavBar/NavBar';

const App = ()=>{
  const [currentId,setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);
  return(
    <Container maxWidth="lg">
      <NavBar/>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
}


export default App;