const tripService =  require('../services/tripService');

const addTrip = async (req, res) => {
    const { status, result } = await tripService.addTrip(req)
    res.status(status).json(result);
}

const updateTrip = async (req, res) => {
    const { status, result } = await tripService.updateTrip(req)
    res.status(status).json(result);
}

const deleteTrip = async (req, res) => {
    const { status, result } = await tripService.deleteTrip(req)
    res.status(status).json(result);
}

const getTrip = async(req, res) => {
    const { status, result } = await tripService.getTrip(req)
    res.status(status).json(result);
}

const getAllTrip = async (req, res) => {
    const { status, result } = await tripService.getAllTrip(req)
    res.status(status).json(result);
}

module.exports = {
    addTrip,
    updateTrip,
    deleteTrip,
    getTrip,
    getAllTrip
};