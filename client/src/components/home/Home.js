import React,{useState,useEffect} from 'react';
import { Container, Grow, Grid,Paper } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Forms';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import Paginatation from '../Pagination/PagiNation'
import useStyles from './style'
const Home = () => {
    const [currentId,setCurrentId] = useState(null);
 
  const dispatch = useDispatch();
  const classes = useStyles()

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);
    return (
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Paper className={classes.Paper} elevation= {6}>
              <Paginatation/>

            </Paper>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}
export default Home;