import React,{useState,useEffect} from 'react';
import { Container, Grow, Grid,Paper,AppBar,TextField, Button  } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Forms';
import {useDispatch} from 'react-redux';
import {getPosts,getPostBySearch} from '../../actions/posts';
import Paginatation from '../Pagination/PagiNation'
import {useNavigate ,useLocation} from 'react-router-dom'
import ChipInput from 'material-ui-chip-input';
import useStyles from './style'

function useQuery(){
  return new URLSearchParams(useLocation.search)
}

const Home = () => {
    const [currentId,setCurrentId] = useState(null);
 
  const dispatch = useDispatch();
  const classes = useStyles()
  const query  = useQuery()
  const navigation = useNavigate ()
  const page= query.get('page') || 1
  const searchQuery = query.get('searchQuery')
  const [search,setSearch] = useState('')
  const [tags,setTags] = useState([])

  const handleKeyPress = (e) => {
    if(e.key === 13){
      searchPost()

    }

  }
  const handleAdd = (tag) => setTags({...tags,tag})
  const handleDelete = (tagDelete) => setTags(tags.filter((tag)=>tag===tagDelete))

  const searchPost = ()=> {
    if (search.trim()) {
      dispatch(getPostBySearch({search ,tags: tags.join(',')}))
    } else {
      navigation('/')
    }
  }

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);
    return (
        <Grow in>
        <Container className="xl">
          <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField
              name="search"
              variant="outlined"
              label="Search"
              fullWidth
              value={search}
              onChange={(e)=>  setSearch(e.target.value)}
              onKeyPress= {handleKeyPress}
              />

              <ChipInput
              style={{margin : '10px 0'}}
              value={tags}
              onAdd={handleAdd}
              onDelete={handleDelete}
              label="search tags"
              variant = "outlined"
              />
              <Button className={classes.searchButton} onClick={searchPost} color="primary"  variant='contained'>Search</Button>

            </AppBar>
            <Paper className={classes.Paper} elevation= {6}>
              <Paginatation/>

            </Paper>
            <Grid item xs={12} sm={6} md={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}
export default Home;