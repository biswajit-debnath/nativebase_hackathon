const VehiclesModel = require('../models/vehicles');
const { ObjectId } = require('mongodb');

const addVehicle = async (req) => {
    const data = new VehiclesModel({
        id: new ObjectId().toString(),
        name: req.body.name,
        capacity: req.body.capacity,
        unit: req.body.unit
    })

    try {
        const dataToSave = await data.save();
        return {
            status : 200,
            result : dataToSave
        }
    }
    catch (error) {
        return {
            status : 400,
            result : {message: error.message}
        }
    }
}

const updateVehicle = async (req) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const capacity = req.body.capacity;
        const unit = req.body.unit;

        await VehiclesModel.findOneAndUpdate({id}, {$set : {
            name,
            capacity,
            unit
        }})
        const data = await VehiclesModel.find({
            id
        });
        return {
            status : 200,
            result : data
        }
    }
    catch (error) {
        return {
            status : 400,
            result : {message: error.message}
        }
    }
}

const deleteVehicle = async (req) => {
    try {
        const id = req.params.id;
        const data = await VehiclesModel.findOneAndDelete({id})
        return {
            status : 200,
            result : `Document with ${data.name} has been deleted..`
        }
    }
    catch (error) {
        return {
            status : 400,
            result : {message: error.message}
        }
    }
}

const getVehicle = async(req) => {
    try{
        const id = req.params.id;
        const data = await VehiclesModel.find({
            id
        });
        return {
            status : 200,
            result : data
        }
    }
    catch(error){
        return {
            status : 400,
            result : {message: error.message}
        }
    }
}

const getAllVehicle = async (req) => {
    try{
        const data = await VehiclesModel.find();
        return {
            status : 200,
            result : data
        }
    }
    catch(error){
        return {
            status : 400,
            result : {message: error.message}
        }
    }
}

module.exports = {
    addVehicle,
    updateVehicle,
    deleteVehicle,
    getVehicle,
    getAllVehicle
};