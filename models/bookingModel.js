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
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
},{timestamps:true})        

const Booking = mongoose.model('Booking',bookingSchema);

export default Booking;
