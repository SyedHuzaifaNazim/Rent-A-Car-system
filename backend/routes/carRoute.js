const express = require('express');
const router = express.Router();
const { getAllCars, addCar, updateCarAvailability } = require('../controllers/carController');

// Routes
router.get('/', getAllCars); // GET /api/cars
router.post('/', addCar); // POST /api/cars
router.put('/:id', updateCarAvailability); // PUT /api/cars/:id

module.exports = router;
