import React,{useState,useEffect} from 'react';
import { Container, Grow, Grid,Paper,AppBar,TextField,Button } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Forms';
import {useDispatch} from 'react-redux';
import {useNavigate,useLocation } from 'react-router-dom'
import {getPosts,getPostsBySearch} from '../../actions/posts';
import Paginatation from '../Pagination/PagiNation'
import useStyles from './style'
import ChipInput from 'material-ui-chip-input'

function useQuery()  {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId,setCurrentId] = useState(null)
    const [search,setSearch]  = useState('')
    const [tags,setTags] = useState([])
    const query  = useQuery()
    const navigate = useNavigate()
    const page  = query.get('page') || 1
    const searchQuery = query.get('searchQuery') 
 
  const dispatch = useDispatch();
  const classes = useStyles()

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);

  const searchPost =  () => {
    if(search.trim() || tags){
      dispatch(getPostsBySearch({search,tags:tags.join(',')}))
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)

    }else{
      navigate('/')
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode ===13){
      searchPost()
    }
  }

  const handleAdd = (tag) => setTags([...tags,tag])
  const handleDelete=(tagToDelete) => setTags([tags.filter((tag)=> tag !== tagToDelete)])
    return (
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Paper className={classes.Paper} elevation= {6}>
              

            </Paper>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField
                name="search"
                variant='outlined'
                label = "Search "
                fullWidth
                onKeyPress={handleKeyPress}
                value={search}
                onChange={(e)=> setSearch(e.target.value)}

            
                />
                <ChipInput
                style={{marign: '10px 0'}}
                value={tags}
                onAdd={(chip)=>handleAdd(chip)}
                onDelete={(chip) =>handleDelete(chip)}
                label = "Search Tags"
                variant='outlined'
                />
                <Button onClick={searchPost} className={classes.searchButton} color='primary' variant='contained'> Search</Button>

              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              {(!searchQuery && !tags.length) && (
                <Paper className={classes.pagination} evation={6}>
                  <Paginatation page={page}/>

                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}
export default Home;