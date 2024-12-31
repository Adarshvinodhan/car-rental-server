import { Router } from "express";
import { createOrder, verifyPayment } from "../controllers/paymentController.js";

export const router = Router();

router.post('/order',createOrder);
router.post('/verify',verifyPayment);


