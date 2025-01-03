import { getAllUsers,getUserById,deleteUserById } from "../controllers/userController.js";
import {Router} from 'express'
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

router.get('/users',authMiddleware,getAllUsers);
router.get('/user',authMiddleware,getUserById);
router.delete('/user/:id',authMiddleware,deleteUserById);