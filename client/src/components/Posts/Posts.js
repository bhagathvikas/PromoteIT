
import { useSelector } from "react-redux";
import Post from '../Posts/Post/Post.js';

import React from "react";
import useStyles from './style';
import {Grid,CircularProgress} from '@material-ui/core';

 const Posts = ({setCurrentId})=>{
     const posts = useSelector((state)=>state.posts);
    const classes = useStyles();
     return(
         !posts.length ? <CircularProgress/>:(
             <Grid className={classes.container} container alignitems="strecth" spacing="3">
                 {
                     posts.map((post)=>(
                         <Grid key={post._id} items xs={12} sm={6}
                        >
                            <Post post={post} setCurrentId={setCurrentId}/>

                         </Grid>
                     
                     ))
                 }

             </Grid>
         )
     );
 }

 export default Posts;