const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router()
//Post Method
router.post('/post', userController.addUser);

//Update by ID Method
router.patch('/update/:id', userController.updateUser)

//Delete by ID Method
router.delete('/delete/:id', userController.deleteUser)

//Get by ID Method
router.get('/getOne/:id', userController.getUser)

//Get all Method
router.get('/getAll', userController.getAllUser)

// Login user
router.post('/login', userController.login)

// Register User
router.post('/register', userController.register)

// validate auth code
router.post('/validateAuthCode', userController.validateAuthCode)

// Get trips
router.get('/getTrips/:id', userController.getTrips)

// Get bids
router.get('/getBids/:id', userController.getBids)

module.exports = router;