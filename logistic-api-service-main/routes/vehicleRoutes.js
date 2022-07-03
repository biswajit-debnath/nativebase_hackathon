const express = require('express');
const vehicleController = require('../controllers/vehicleController');

const router = express.Router()
//Post Method
router.post('/post', vehicleController.addVehicle);

//Update by ID Method
router.patch('/update/:id', vehicleController.updateVehicle)

//Delete by ID Method
router.delete('/delete/:id', vehicleController.deleteVehicle)

//Get by ID Method
router.get('/getOne/:id', vehicleController.getVehicle)

//Get all Method
router.get('/getAll', vehicleController.getAllVehicle)

module.exports = router;