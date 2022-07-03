const vehicleService =  require('../services/vehicleService');

const addVehicle = async (req, res) => {
    const { status, result } = await vehicleService.addVehicle(req)
    res.status(status).json(result);
}

const updateVehicle = async (req, res) => {
    const { status, result } = await vehicleService.updateVehicle(req)
    res.status(status).json(result);
}

const deleteVehicle = async (req, res) => {
    const { status, result } = await vehicleService.deleteVehicle(req)
    res.status(status).json(result);
}

const getVehicle = async(req, res) => {
    const { status, result } = await vehicleService.getVehicle(req)
    res.status(status).json(result);
}

const getAllVehicle = async (req, res) => {
    const { status, result } = await vehicleService.getAllVehicle(req)
    res.status(status).json(result);
}

module.exports = {
    addVehicle,
    updateVehicle,
    deleteVehicle,
    getVehicle,
    getAllVehicle
};