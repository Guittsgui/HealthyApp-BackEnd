import { Router } from "express";
import UserController from './controllers/UserController.js'
import DietController from "./controllers/DietController.js";
import PostController from "./controllers/PostController.js";
import CommentController from "./controllers/CommentController.js";


const router = Router()

router.get('/', UserController.index)
router.get('/user/:id', UserController.show)
router.post('/user',UserController.store)
router.post('/login',UserController.verifyLogin)

router.post('/diet', DietController.store)
router.get('/diet/:id', DietController.findDietByUserId)
router.delete('/diet/:id',DietController.delete)

router.post('/post',PostController.store)
router.get('/post/:id',PostController.getPostByID)
router.get('/post',PostController.getAllPosts)

router.post('/comment',CommentController.store)
router.get('/comment/:id',CommentController.getCommentByPostId)


export default router;