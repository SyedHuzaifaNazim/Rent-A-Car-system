const Car = require('../models/Car');

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cars' });
  }
};

const addCar = async (req, res) => {
  try {
    const { name, brand, pricePerDay, location } = req.body;
    const newCar = new Car({ name, brand, pricePerDay, location });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ error: 'Error adding car' });
  }
};


const updateCarAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const { available } = req.body;
    const car = await Car.findByIdAndUpdate(id, { available }, { new: true });
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ error: 'Error updating car availability' });
  }
};

module.exports = { getAllCars, addCar, updateCarAvailability };
