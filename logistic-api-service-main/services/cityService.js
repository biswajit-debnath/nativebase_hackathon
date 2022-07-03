const CitiesModel = require('../models/cities');
const { ObjectId } = require('mongodb');

const addCity = async (req) => {
    const data = new CitiesModel({
        id: new ObjectId().toString(),
        name: req.body.name,
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

const updateCity = async (req) => {
    try {
        const id = req.params.id;
        const name = req.body.name;

        await CitiesModel.findOneAndUpdate({id}, {$set : {
            name,
            capacity,
            unit
        }})
        const data = await CitiesModel.find({
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

const deleteCity = async (req) => {
    try {
        const id = req.params.id;
        const data = await CitiesModel.findOneAndDelete({id})
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

const getCity = async(req) => {
    try{
        const id = req.params.id;
        const data = await CitiesModel.find({
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

const getAllCity = async (req) => {
    try{
        const data = await CitiesModel.find();
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
    addCity,
    updateCity,
    deleteCity,
    getCity,
    getAllCity
};