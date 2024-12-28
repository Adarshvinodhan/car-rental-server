import { Router } from "express";
import { createBooking, deleteBookingById } from "../controllers/bookingController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

router.post('/booking',authMiddleware,createBooking);
router.delete('/booking/:id',deleteBookingById);