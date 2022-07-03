const TripsModel = require('../models/trips');
const LoadsModel = require('../models/loads');
const { ObjectId } = require('mongodb');
const BidsModel = require('../models/bids');

const addTrip = async (req) => {
    const bid_id = req.body.bid_id;
    let bidRes = await BidsModel.findOne({
        id: bid_id
    });
    let load_id = bidRes.load_id;
    let loadRes = await LoadsModel.findOne({
        id: load_id
    });

    await LoadsModel.findOneAndUpdate({
        id: load_id
    }, {$set : {
        isActive: false
    }});

    const data = new TripsModel({
        id: new ObjectId().toString(),
        user_id: loadRes.user_id,
        load_id,
        from: loadRes.from,
        to: loadRes.to,
        prod_type: loadRes.prod_type,
        weight: loadRes.weight,
        date: loadRes.date,
        carrier_id: bidRes.carrier_id,
        status: req.body.status || "Pending",
        amount: bidRes.amount
    })

    // await BidsModel.findOneAndUpdate({
    //     load_id
    // }, {$set: 
    //     {status : 0}
    // });
    await BidsModel.findOneAndDelete({
        id: bid_id
    });

    try {
        const dataToSave = await data.save();
        return {
            status : 200,
            result :
            {
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

const updateTrip = async (req) => {
    try {  
        const load_id = req.body.load_id;
        const bid_id = req.body.bid_id;

        let loadRes = await LoadsModel.find({
            id: load_id
        });
        let bidRes = await LoadsModel.find({
            id: bid_id
        });      
        const id = req.params.id;
        const user_id = loadRes[0].user_id;
        const carrier_id = bidRes[0].carrier_id;
        const status = req.body.status;
        const amount = bidRes[0].amount;

        await TripsModel.findOneAndUpdate({id}, {$set : {
            user_id,
            carrier_id,
            load_id,
            status,
            amount
        }})
        const data = await TripsModel.find({
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

const deleteTrip = async (req) => {
    try {
        const id = req.params.id;
        const data = await TripsModel.findOneAndDelete({id})
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

const getTrip = async(req) => {
    try{
        const id = req.params.id;
        const data = await TripsModel.find({
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

const getAllTrip = async (req) => {
    try{
        const data = await TripsModel.find();
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
    addTrip,
    updateTrip,
    deleteTrip,
    getTrip,
    getAllTrip
};