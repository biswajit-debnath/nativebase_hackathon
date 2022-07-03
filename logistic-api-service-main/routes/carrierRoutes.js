const express = require('express');
const carrierController = require('../controllers/carrierController');

const router = express.Router()
//Post Method
router.post('/post', carrierController.addCarrier);

//Update by ID Method
router.patch('/update/:id', carrierController.updateCarrier)

//Delete by ID Method
router.delete('/delete/:id', carrierController.deleteCarrier)

//Get by ID Method
router.get('/getOne/:id', carrierController.getCarrier)

//Get all Method
router.get('/getAll', carrierController.getAllCarrier)

// Get loads
router.get('/getLoads/:id', carrierController.getLoads)

// Get bids
router.get('/getBids/:id', carrierController.getBids)

// Get trips
router.get('/getTrips/:id', carrierController.getTrips)

module.exports = router;