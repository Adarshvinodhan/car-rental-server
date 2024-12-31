import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Car'
    },
    model: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    hours:{
        type: Number,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'approved'
    }
},{timestamps:true})        

const Booking = mongoose.model('Booking',bookingSchema);

export default Booking;
