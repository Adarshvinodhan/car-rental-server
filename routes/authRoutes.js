import {Router} from 'express'
import {registerUser,loginUser}  from '../controllers/authController.js';
import { googleAuth, googleCallback, googleSuccess } from '../controllers/authController.js';

export const router = Router();

router.post('/auth/register',registerUser);
router.post('/auth/login',loginUser);
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleCallback, googleSuccess);


