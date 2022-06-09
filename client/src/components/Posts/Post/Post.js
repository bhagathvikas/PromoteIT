import React from "react";
import useStyles from './style';
import {Card,CardAction,CArdContent,CardMedia,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/core/ThumbUpAlt';
import DelteIcon from '@material-ui/core/Delete';
import MoreHorizIcon from '@material-ui/core/MoreHorizIcon'

 const Post = ()=>{
    const classes = useStyles();
     return(
         <Card className={classes.card} >
             <CardMedia className={classes.media} image ={post.selectedFile} title={post.title}/>
             <div className={classes.overlay}>
                 <Typography variant="h6">{post.newPost}</Typography>
                 {/* //<Typography variant="body2">{SVGAnimateMotionElement(po)}</Typography> */}


             </div>
             <div className={classes.overlay2}>
                 <Button style={{color:'white'}} size="small" onClick={}></Button>


             </div>

         </Card>
     );
 }

 export default Post;