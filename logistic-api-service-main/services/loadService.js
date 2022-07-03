const LoadsModel = require('../models/loads');
const { ObjectId } = require('mongodb');

const addLoad = async (req) => {
    const data = new LoadsModel({
        id: new ObjectId().toString(),
        user_id: req.body.user_id,
        from: req.body.from,
        to: req.body.to,
        prod_type: req.body.prod_type,
        weight: req.body.weight,
        date: req.body.date,
        max_amount: req.body.max_amount,
        isActive: req.body.isActive || true
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

const updateLoad = async (req) => {
    try {        
        const id = req.params.id;
        const user_id = req.body.user_id;
        const from = req.body.from;
        const to = req.body.to;
        const prod_type = req.body.prod_type;
        const weight = req.body.weight;
        const date = req.body.date;
        const max_amount = req.body.max_amount;
        const isActive = req.body.isActive || true

        await LoadsModel.findOneAndUpdate({id}, {$set : {
            user_id,
            from,
            to,
            prod_type,
            weight,
            date,
            max_amount,
            isActive
        }})
        const data = await LoadsModel.find({
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

const deleteLoad = async (req) => {
    try {
        const id = req.params.id;
        const data = await LoadsModel.findOneAndDelete({id})
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

const getLoad = async(req) => {
    try{
        const id = req.params.id;
        const data = await LoadsModel.find({
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

const getAllLoad = async (req) => {
    try{
        const data = await LoadsModel.find();
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

const getAllLoads = async (req) => {
    const id = req.params.id;
    try{
        const data = await LoadsModel.find({
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
    addLoad,
    updateLoad,
    deleteLoad,
    getLoad,
    getAllLoad,
    getAllLoads
};