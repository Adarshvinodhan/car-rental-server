import Router from "express";
import { createReview, getAllReviews, deleteReview, getReviewByCarId, getUserReviewByBookingId } from "../controllers/reviewController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

router.post('/review',authMiddleware,createReview);
router.get('/review/car/:id',authMiddleware,getReviewByCarId);
router.get('/reviews',authMiddleware,getAllReviews);
router.get('/review/:id',authMiddleware,getUserReviewByBookingId);
router.delete('/review/:id',authMiddleware,deleteReview);


