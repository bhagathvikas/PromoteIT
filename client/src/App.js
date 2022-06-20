import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter,Routes,Route,Navigate  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from  './components/home/Home'
import AUTH from './components/Auth/Auth.js'
import PostDetails from './components/PostDetails/PostDetails';

const App = ()=>{

  const user = JSON.parse(localStorage.getItem('profile'))
  
  
  
  return(
    <BrowserRouter>
    <Container maxWidth="xl">
      <NavBar />
      <Routes>
        <Route path="/"  element={<Navigate replace to="/posts"/>} />
        <Route path="/posts"  element = {<Home/>}/>
        <Route path="/posts/search"  element = {<Home/>}/>
        <Route path="/posts/:id"  element = {<PostDetails/>}/>
        
        <Route
        path="/auth"
        element={!user ? <AUTH /> : <Navigate replace to="/posts" />}
      />
      </Routes>
    </Container>
  </BrowserRouter>

  );
}


export default App;