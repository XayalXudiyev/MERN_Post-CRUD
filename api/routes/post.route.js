import express from "express";
import { createPost, deletePost, getPost, updatePost } from "../controllers/post.controller.js";

const router = express.Router()

router.get('/getPost', getPost)
router.post('/createPost', createPost)
router.patch('/updatePost/:id', updatePost)
router.delete('/deletePost/:id', deletePost)



export default router