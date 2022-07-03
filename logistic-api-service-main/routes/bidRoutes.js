const express = require('express');
const bidController = require('../controllers/bidController');

const router = express.Router()
//Post Method
router.post('/post', bidController.addBid);

//Update by ID Method
router.patch('/update/:id', bidController.updateBid)

//Delete by ID Method
router.delete('/delete/:id', bidController.deleteBid)

//Get by ID Method
router.get('/getOne/:id', bidController.getBid)

// Reject Bid
router.get('/rejectBid/:id', bidController.rejectBid)

//Get all Method
router.get('/getAll', bidController.getAllBid)

//Get all bids of a load
router.get('/getAllBidsOfLoad/:id', bidController.getAllBidsOfLoad)

// Get bids of user_id
router.get('/getAllBidsByUserId/:id', bidController.getAllBidsByUserId)

module.exports = router;