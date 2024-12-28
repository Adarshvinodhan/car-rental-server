import carModel from "../models/carModel.js";
import bookingModel from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
    try {
        const { carId, startDate, endDate } = req.body;
        const car = await carModel.findById(carId);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        const booking = await bookingModel.create({
            user: req.user.id,
            car: carId,
            startDate,
            endDate,
        });
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.find();
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getBookingById = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteBookingById = async (req, res) => {
    try {
        const booking = await bookingModel.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateBooking = async (req, res) => {
    try {
        const booking = await bookingModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 

export const getBookingsByUserId = async (req, res) => {
    try {
        const bookings = await bookingModel.find({ user: req.user._id });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



