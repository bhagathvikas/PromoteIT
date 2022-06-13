import  express  from "express";

import { getPost ,createPost,upDatePost,deletePost,likePost } from "../controller/posts.js";

const router = express.Router();

router.get('/',getPost);
router.post('/',createPost);
router.patch('/:id',upDatePost);
router.delete('/:id',deletePost);
 router.patch('/:id/LikedPost',likePost);

export default router;