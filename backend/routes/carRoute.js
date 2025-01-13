const express = require('express');
const router = express.Router();
const { getAllCars, addCar, updateCarAvailability } = require('../controllers/carController');

// Routes
router.get('/', getAllCars);
router.post('/', addCar); 
router.put('/:id', updateCarAvailability); 

module.exports = router;
