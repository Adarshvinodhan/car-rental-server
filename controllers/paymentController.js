import razorpay from "../config/razorpay.js";
import crypto from "crypto";

export const createOrder = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
        };
        const order = await razorpay.orders.create(options);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const verifyPayment = (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
    const body = razorpay_order_id + "|" + razorpay_payment_id;
  
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');
  
    if (expectedSignature === razorpay_signature) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  }

   