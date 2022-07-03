const loadService =  require('../services/loadService');

const addLoad = async (req, res) => {
    const { status, result } = await loadService.addLoad(req)
    res.status(status).json(result);
}

const updateLoad = async (req, res) => {
    const { status, result } = await loadService.updateLoad(req)
    res.status(status).json(result);
}

const deleteLoad = async (req, res) => {
    const { status, result } = await loadService.deleteLoad(req)
    res.status(status).json(result);
}

const getLoad = async(req, res) => {
    const { status, result } = await loadService.getLoad(req)
    res.status(status).json(result);
}

const getAllLoad = async (req, res) => {
    const { status, result } = await loadService.getAllLoad(req)
    res.status(status).json(result);
}

const getAllLoads = async (req, res) => {
    const { status, result } = await loadService.getAllLoads(req)
    res.status(status).json(result);
}

module.exports = {
    addLoad,
    updateLoad,
    deleteLoad,
    getLoad,
    getAllLoad,
    getAllLoads
};