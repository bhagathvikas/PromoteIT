import React,{useState} from "react";
import useStyles from './style';
import { TextField,Button,Typography,Paper  } from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts';

 const Form = ()=>{
     const dispatch = useDispatch();
     const [postData,setPostData] =    useState({
         newpost:'',title:'',message:'',tags:'',selectedFile:''
     })
    const classes = useStyles();
    const handleSubmit = async (e)=>{
        e.preventDefault();

        dispatch(createPost(postData));


    }
    const clear = ()=>{
        
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    }

     return(
         //paper is like div it as whithe bg
         <Paper className={classes.paper}>
             <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit = {handleSubmit}>
                 <Typography variant="h6">New Post</Typography>
                 <TextField name="newpost" variant="outlined" label="newpost" fullWidth value={postData.newpost}onChange={(e)=>setPostData({...postData,newpost:e.target.value})}/>
                 <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title}onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                 <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message}onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                 <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags}onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>

             
             <div className={classes.fileInput}>
                 <FileBase
                 type= 'file'
                 multiple= {false}
                 onDone= {({base64})=>setPostData({...postData,selectedFile:base64})}
                 />

                 

             </div>
             <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

        </form>

         </Paper>
     );
 };

 export default Form;