const express = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router()
//Post Method
router.post('/post', tripController.addTrip);

//Update by ID Method
router.patch('/update/:id', tripController.updateTrip)

//Delete by ID Method
router.delete('/delete/:id', tripController.deleteTrip)

//Get by ID Method
router.get('/getOne/:id', tripController.getTrip)

//Get all Method
router.get('/getAll', tripController.getAllTrip)

module.exports = router;