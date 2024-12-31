import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Car'
    },
    username: {
        type: String,
        required: true
    },
    carname: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},{timestamps:true})

export default mongoose.model('Review', reviewSchema);