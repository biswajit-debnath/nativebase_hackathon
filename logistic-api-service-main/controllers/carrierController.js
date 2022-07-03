const carrierService =  require('../services/carrierService');

const addCarrier = async (req, res) => {
    const { status, result } = await carrierService.addCarrier(req)
    res.status(status).json(result);
}

const updateCarrier = async (req, res) => {
    const { status, result } = await carrierService.updateCarrier(req)
    res.status(status).json(result);
}

const deleteCarrier = async (req, res) => {
    const { status, result } = await carrierService.deleteCarrier(req)
    res.status(status).json(result);
}

const getCarrier = async(req, res) => {
    const { status, result } = await carrierService.getCarrier(req)
    res.status(status).json(result);
}

const getAllCarrier = async (req, res) => {
    const { status, result } = await carrierService.getAllCarrier(req)
    res.status(status).json(result);
}

const getLoads = async (req, res) => {
    const { status, result } = await carrierService.getLoads(req)
    res.status(status).json(result);
}

const getBids = async (req, res) => {
    const { status, result } = await carrierService.getBids(req)
    res.status(status).json(result);
}

const getTrips = async (req, res) => {
    const { status, result } = await carrierService.getTrips(req)
    res.status(status).json(result);
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