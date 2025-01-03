import Review from "../models/reviews.js";

export const createReview = async (req, res) => {
    try {
        const { userId, username, carId, carname, rating, comment } = req.body;
        const review = new Review({ userId, username, carId, carname, rating, comment });
        await review.save();
        res.status(201).json({ message: 'Review created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
}

export const getReviewByCarId = async (req, res) => {
    try {
        const reviews = await Review.find({ car: req.params.id });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}