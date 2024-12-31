import { Router } from "express";
import {  createBooking,deleteBookingById, getAllBookings,getBookingsByUserId } from "../controllers/bookingController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

//User Routes
router.post('/booking',authMiddleware,createBooking);
router.get('/userbooking',authMiddleware,getBookingsByUserId);
//Admin Routes
router.get('/bookings',authMiddleware,getAllBookings);
router.delete('/booking/:id',authMiddleware,deleteBookingById);