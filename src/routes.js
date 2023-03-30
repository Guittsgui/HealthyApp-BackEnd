import { Router } from "express";
import UserController from './controllers/UserController.js'

const router = Router()

router.get('/', UserController.index)
router.get('/user/:id', UserController.show)
router.post('/user',UserController.store)
router.post('/login',UserController.verifyLogin)
export default router;