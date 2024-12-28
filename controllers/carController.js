import carModel from '../models/carModel.js';

export const getAllCars = async (req, res) => {
    try {
        const cars = await carModel.find();
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};  

export const getCarById = async (req, res) => {
    try {
        const car = await carModel.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createCar = async (req, res) => {
    try {
        const car = await carModel.create(req.body);
        res.status(201).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};  

export const updateCar = async (req, res) => {
    try {
        const car = await carModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteCar = async (req, res) => {
    try {
        const car = await carModel.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
