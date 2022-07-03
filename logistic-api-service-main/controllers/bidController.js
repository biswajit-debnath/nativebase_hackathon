const bidService =  require('../services/bidService');

const addBid = async (req, res) => {
    const { status, result } = await bidService.addBid(req)
    res.status(status).json(result);
}

const updateBid = async (req, res) => {
    const { status, result } = await bidService.updateBid(req)
    res.status(status).json(result);
}

const deleteBid = async (req, res) => {
    const { status, result } = await bidService.deleteBid(req)
    res.status(status).json(result);
}

const getBid = async(req, res) => {
    const { status, result } = await bidService.getBid(req)
    res.status(status).json(result);
}

const rejectBid = async(req, res) => {
    const { status, result } = await bidService.rejectBid(req)
    res.status(status).json(result);
}

const getAllBid = async (req, res) => {
    const { status, result } = await bidService.getAllBid(req)
    res.status(status).json(result);
}

const getAllBidsOfLoad = async (req, res) => {
    const { status, result } = await bidService.getAllBidsOfLoad(req)
    res.status(status).json(result);
}

const getAllBidsByUserId = async (req, res) => {
    const { status, result } = await bidService.getAllBidsByUserId(req)
    res.status(status).json(result);
}

module.exports = {
    addBid,
    updateBid,
    deleteBid,
    getBid,
    getAllBid,
    getAllBidsOfLoad,
    rejectBid,
    getAllBidsByUserId
};