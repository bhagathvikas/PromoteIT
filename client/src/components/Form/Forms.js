import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import ChipInput from 'material-ui-chip-input'
import useStyles from './style';
import { createPost, updatePost } from '../../actions/posts';
import {useNavigate} from 'react-router-dom'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({  requirement: '', details: '', tags: [], selectedFile: '' ,followers:'',reach:'',budget:''});
  const post = useSelector((state) => (currentId ? state.posts.posts.find((details) => details._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  const navigate = useNavigate()
  const classes = useStyles();
  const clear = () => {
    setCurrentId(0);
    setPostData({  requirement: '', details: '', tags: '', selectedFile: '',followers:'',reach:'',budget:'' });
  };
  useEffect(() => {
    if(!post?.requirement) clear()
    if (post) setPostData(post);
  }, [post]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({...postData,name:user?.result?.name,navigate}))

      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if(!user?.result?.name){
    return(
      <Paper className={classes.paper} elevation={6}>
      <Typography  variant="h6" align="center">
      Sign IN to Post
      </Typography>
      </Paper>
    )
  }



  const handleAdd =(tag) => {
    setPostData({...postData,tags: [...postData.tags,tag]})
  }
  const handleDelete =(chipToDelete) =>{
    setPostData({...postData,tags: postData.tags.filter((tag)=>tag!==chipToDelete)})
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Updatig"${post.requirement}"` : 'Post Promotions'}</Typography>
        
        <TextField name="Requirement" variant="outlined" label="Requirement" fullWidth value={postData.requirement} onChange={(e) => setPostData({ ...postData, requirement: e.target.value })} />
        <TextField name="details" variant="outlined" label="Details" fullWidth multiline rows={4} value={postData.details} onChange={(e) => setPostData({ ...postData, details: e.target.value })} />
        <TextField name="followers" variant="outlined" label="Followers" fullWidth value={postData.followers} onChange={(e) => setPostData({ ...postData, followers: e.target.value })} />
        <TextField name="reach" variant="outlined" label="Reach" fullWidth value={postData.reach} onChange={(e) => setPostData({ ...postData, reach: e.target.value })} />
        <TextField name="budget" variant="outlined" label="Budget" fullWidth value={postData.budget} onChange={(e) => setPostData({ ...postData, budget: e.target.value })} />
        <div style={{padding: '50px 0',width: '94%'}}>
          <ChipInput
          name="tags"
          variant='outlined'
          label="tags"
          fullWidth
          value={postData.tags}
          onAdd={(chip)=>handleAdd(chip)}
          onDelete={(chip) => handleDelete(chip)}
          />

        </div>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;