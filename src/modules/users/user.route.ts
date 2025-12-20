import express from 'express';
import { userController } from './user.controller';
import auth from '../../middleWare/auth';

const router = express.Router();

router.get('/users', auth("22"), userController.getAllUsers)
// router.get('/users/singleuser', auth(), userController.getSingleUser)
// router.delete('/users/:userId', userController.createUser)


export const userRouter = router