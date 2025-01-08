import {Router} from 'express';
import {createCar,getCarById,getAllCars,deleteCar,updateCar} from '../controllers/carController.js';
import {authMiddleware} from '../middlewares/authMiddleware.js';
export const router = Router();

router.post('/car',authMiddleware,createCar);
router.get('/cars',getAllCars);
router.get('/car/:id',authMiddleware,getCarById);
router.delete('/car/:id',authMiddleware,deleteCar);
router.put('/car/:id',authMiddleware,updateCar);

export default router;