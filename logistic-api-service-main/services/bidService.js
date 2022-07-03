const BidsModel = require('../models/bids');
const { ObjectId } = require('mongodb');
const UsersModel = require("../models/users");
const LoadsModel = require('../models/loads');

const addBid = async (req) => {
    const res = await LoadsModel.findOne({
        id: req.body.load_id
    });
    const user_id = res.user_id
    const data = new BidsModel({
        id: new ObjectId().toString(),
        load_id: req.body.load_id,
        user_id: user_id,
        carrier_id: req.body.carrier_id,
        amount: parseInt(req.body.amount),
        status: (req.body.status) || 1,
    })

    try {
        const dataToSave = await data.save();
        return {
            status : 200,
            result : {
                status : "success",
                data : dataToSave
            }
        }
    }
    catch (error) {
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

const updateBid = async (req) => {
    try {        
        const id = req.params.id;
        const load_id = req.body.load_id;
        const user_id = req.body.user_id;
        const carrier_id = req.body.carrier_id;
        const amount = req.body.amount;
        const status = req.body.status;

        await BidsModel.findOneAndUpdate({id}, {$set : {
            load_id,
            user_id,
            carrier_id,
            amount,
            status
        }})
        const data = await BidsModel.find({
            id
        });
        return {
            status : 200,
            result : {
                status : "success",
                data
            }
        }
    }
    catch (error) {
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

const deleteBid = async (req) => {
    try {
        const id = req.params.id;
        const data = await BidsModel.findOneAndDelete({id})
        return {
            status : 200,

            result : {
                status : "success",
                message : `Document with ${data.name} has been deleted..`
            }
        }
    }
    catch (error) {
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

const getBid = async(req) => {
    try{
        const id = req.params.id;
        const data = await BidsModel.find({
            id
        });
        return {
            status : 200,
            result : {
                status : "success",
                data
            }
        }
    }
    catch(error){
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

const rejectBid = async(req) => {
    try{
        const id = req.params.id;
        const data = await BidsModel.findOneAndUpdate({
            id
        }, {$set : {status : 0}});
        return {
            status : 200,
            result : {
                status : "success",
                data
            }
        }
    }
    catch(error){
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

const getAllBid = async (req) => {
    try{
        const data = await BidsModel.find();
        return {
            status : 200,
            result : {
                status : "success",
                data
            }
        }
    }
    catch(error){
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

const getAllBidsOfLoad = async (req) => {
    const id = req.params.id;
    try{
        const data = await BidsModel.find({
            load_id : id
        });
        return {
            status : 200,
            result : {
                status : "success",
                data
            }
        }
    }
    catch(error){
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

const getAllBidsByUserId = async (req) => {
    const id = req.params.id;
    try{
        const data = await BidsModel.find({
            user_id : id
        });
        return {
            status : 200,
            result : {
                status : "success",
                data
            }
        }
    }
    catch(error){
        return {
            status : 400,
            result : {
                status : "error",
                message: error.message
            }
        }
    }
}

module.exports = {
    addBid,
    updateBid,
    deleteBid,
    getBid,
    getAllBid,
    getAllBidsOfLoad,
    rejectBid,
    getAllBidsByUserId
};