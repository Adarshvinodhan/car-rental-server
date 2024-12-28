import {Router} from 'express'
import  {registerUser,loginUser}  from '../controllers/authController.js';

export const router = Router();

router.post('/auth/register',registerUser);
router.post('/auth/login',loginUser);


