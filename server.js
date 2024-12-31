import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/dbconfig.js'
import { router as authRouter} from './routes/authRoutes.js';
import {router as carRouter} from './routes/carRoutes.js';
import {router as bookingRouter} from './routes/bookingRoutes.js';
import {router as userRouter} from './routes/userRoutes.js';
import {router as paymentRouter} from './routes/paymentRoutes.js';
import {router as reviewRouter} from './routes/reviewRoutes.js';

//Init express
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/',authRouter,carRouter,bookingRouter,userRouter,paymentRouter,reviewRouter);

//Connect DB & Start Server
connectDB();
app.listen(process.env.PORT,console.log(`Server UP @PORT:${process.env.PORT}`))
