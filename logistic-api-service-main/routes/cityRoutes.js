const express = require('express');
const cityController = require('../controllers/cityController');

const router = express.Router()
//Post Method
router.post('/post', cityController.addCity);

//Update by ID Method
router.patch('/update/:id', cityController.updateCity)

//Delete by ID Method
router.delete('/delete/:id', cityController.deleteCity)

//Get by ID Method
router.get('/getOne/:id', cityController.getCity)

//Get all Method
router.get('/getAll', cityController.getAllCity)

module.exports = router;