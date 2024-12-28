import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    availability: {
        type: Boolean,
        default: true
    },
    rentPerHour : {type : Number , required : true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Car = mongoose.model('Car', carSchema);
export default Car;
