import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controller/posts.js';
import auth from '../middleware/auth.js'

const router = express.Router();

//searchposts
router.get('/search', getPostsBySearch);
//allposts
router.get('/', getPosts);
//singlepost
router.get('/:id', getPost);
//create
router.post('/', auth,  createPost);
//update
router.patch('/:id', auth, updatePost);
//delete post
router.delete('/:id', auth, deletePost);
//likes
router.patch('/:id/likePost', auth, likePost);
//commenst post
router.post('/:id/commentPost', commentPost);

export default router;