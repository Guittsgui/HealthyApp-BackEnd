import { Router } from "express";
import UserController from './controllers/UserController.js'

const router = Router()

router.get('/', UserController.index)
router.get('/user/:id', UserController.show)
router.get('/user',UserController.store)

export default router;