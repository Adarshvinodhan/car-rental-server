import bookingModel from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
    try {
      const {user,car,hours,amount,model} = req.body;
      const payment = await bookingModel.create({user,car,hours,amount,model,status:"approved"});
        res.status(201).json(payment);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

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

export const getBookingsByUserId = async (req, res) => {
    try {
        const bookings = await bookingModel.find({ user: req.user.id });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



