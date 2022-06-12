import React from "react";
import useStyles from './style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
//import ThumbUpAltIcon from '@material-ui/core/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

 const Post = ({post,setCurrentId})=>{
    const classes = useStyles();
     return(
         <Card className={classes.card} >
             <CardMedia className={classes.media} image ={post.selectedFile} title={post.title}/>
             <div className={classes.overlay}>
                 <Typography variant="h6">{post.newPost}</Typography>
                 {/* //<Typography variant="body2">{SVGAnimateMotionElement(po)}</Typography> */}


             </div>
             <div className={classes.overlay2}>
                 <Button style={{color:'white'}} size="small" onClick={()=>setCurrentId._id}>
                     <MoreHorizIcon fontSize="default"/>
                 </Button>


             </div>
             <div className={classes.details}>
                 <Typography variant="body2" color="textSecondary"> {post.tags.map((tag)=>`#${tag} `)}</Typography>
             </div>
             <CardContent>
             <Typography className={classes.title} variant="body2" color="textSecondary"> {post.message}</Typography>
             </CardContent>
             <CardActions className={classes.action}>

                 <Button size="small" color="primary" onClick={()=>{}}>
                     <DeleteIcon fontSize="small"/>

                 </Button>

             </CardActions>
             


         </Card>
     );
 }

 export default Post;