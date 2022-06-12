import  express  from "express";

import { getPost ,createPost,upDatePost } from "../controller/posts.js";

const router = express.Router();

router.get('/',getPost);
router.post('/',createPost);
router.patch('/:id',upDatePost);

export default router;