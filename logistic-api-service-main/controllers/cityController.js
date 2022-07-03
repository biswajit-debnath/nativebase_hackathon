const cityService =  require('../services/cityService');

const addCity = async (req, res) => {
    const { status, result } = await cityService.addCity(req)
    res.status(status).json(result);
}

const updateCity = async (req, res) => {
    const { status, result } = await cityService.updateCity(req)
    res.status(status).json(result);
}

const deleteCity = async (req, res) => {
    const { status, result } = await cityService.deleteCity(req)
    res.status(status).json(result);
}

const getCity = async(req, res) => {
    const { status, result } = await cityService.getCity(req)
    res.status(status).json(result);
}

const getAllCity = async (req, res) => {
    const { status, result } = await cityService.getAllCity(req)
    res.status(status).json(result);
}

module.exports = {
    addCity,
    updateCity,
    deleteCity,
    getCity,
    getAllCity
};