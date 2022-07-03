const CarriersModel = require('../models/carriers');
const { ObjectId } = require('mongodb');
const TripsModel = require('../models/trips');
const BidsModel = require('../models/bids');
const VehiclesModel = require('../models/vehicles');
const LoadsModel = require('../models/loads');

const addCarrier = async (req) => {
    const data = new CarriersModel({
        id: new ObjectId().toString(),
        name: req.body.name,
        number: req.body.number,
        vehicles: req.body.vehicles
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

const updateCarrier = async (req) => {
    try {        
        const id = req.params.id;
        const name = req.body.name;
        const number = req.body.number;
        const vehicles = req.body.vehicles;

        await CarriersModel.findOneAndUpdate({id}, {$set : {
            name,
            number,
            vehicles
        }})
        const data = await CarriersModel.find({
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

const deleteCarrier = async (req) => {
    try {
        const id = req.params.id;
        const data = await CarriersModel.findOneAndDelete({id})
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

const getCarrier = async(req) => {
    try{
        const id = req.params.id;
        const data = await CarriersModel.find({
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

const getAllCarrier = async (req) => {
    try{
        const data = await CarriersModel.find();
        return {
            status : 200,
            result : data
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

const getLoads = async(req) => {
    try{
        const id = req.params.id;
        let data = await CarriersModel.findOne({
            id
        });
        const vehicleId = data.vehicleTypeId;
        data = await VehiclesModel.findOne({
            id: vehicleId
        });
        const capacity = parseInt(data.capacity);
        const loads = await LoadsModel.find({
            weight: {
                "$lte" : capacity
            }
        });
        return {
            status : 200,
            result : {
                status : "success",
                data : loads
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

const getBids = async(req) => {
    try{
        const id = req.params.id;
        const data = await BidsModel.find({
            carrier_id: id
        }).lean();
        for(let i=0; i<data.length; i++) {
            const res = await CarriersModel.findOne({
                id: data[i].carrier_id
            })
            data[i]["name"] = res["name"];
            data[i]["vehicleTypeId"] = res["vehicleTypeId"];
            data[i]["vehicleNo"] = res["vehicleNo"];

            const veh = await VehiclesModel.findOne({
                id: res["vehicleTypeId"]
            });
            data[i]["vehicleName"] = veh["name"];
            data[i]["vehicleCapacity"] = veh["capacity"];
        }
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

const getTrips = async(req) => {
    try{
        const id = req.params.id;
        const data = await TripsModel.find({
            carrier_id: id
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
    addCarrier,
    updateCarrier,
    deleteCarrier,
    getCarrier,
    getAllCarrier,
    getLoads,
    getBids,
    getTrips
};