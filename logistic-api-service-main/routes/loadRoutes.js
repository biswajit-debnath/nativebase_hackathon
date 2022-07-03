const express = require('express');
const loadController = require('../controllers/loadController');

const router = express.Router()
//Post Method
router.post('/post', loadController.addLoad);

//Update by ID Method
router.patch('/update/:id', loadController.updateLoad)

//Delete by ID Method
router.delete('/delete/:id', loadController.deleteLoad)

//Get by ID Method
router.get('/getOne/:id', loadController.getLoad)

//Get all Method
router.get('/getAll', loadController.getAllLoad)

//Get all loads of an user
router.get('/getAllLoads/:id', loadController.getAllLoads)

module.exports = router;