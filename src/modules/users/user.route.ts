import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/users', userController.createUser)
router.put('/users/:userId', userController.createUser)
router.delete('/users/:userId', userController.createUser)


export const userRouter = router