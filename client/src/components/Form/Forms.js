import React,{useState} from "react";
import useStyles from './style';
import { TextField,Button,Typography,Paper  } from "@material-ui/core";

 const Form = ()=>{
     const [postData,setPostData] =    useState({
         newpost:'',title:'',message:'',tags:'',selectedFile:''
     })
    const classes = useStyles();
    const handleSubmit = ()=>{

    }
     return(
         //paper is like div it as whithe bg
         <Paper className={classes.paper}>
             <form autoComplete="off" noValidate className={classes.form} onSubmit = {handleSubmit}>
                 <Typography variant="h6">New Post</Typography>
                 <TextField
                 name="newpost"
                 variant="outlined"
                 label="newpost"
                 fullWidth
                 value={postData.newpost}
                 onChange={(e)=>setPostData({newpost:e.target.value})}
                 />

             </form>



         </Paper>
     )
 }

 export default Form;