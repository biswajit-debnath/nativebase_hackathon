const userService =  require('../services/userService');

const addUser = async (req, res) => {
    const { status, result } = await userService.addUser(req)
    res.status(status).json(result);
}

const updateUser = async (req, res) => {
    const { status, result } = await userService.updateUser(req)
    res.status(status).json(result);
}

const deleteUser = async (req, res) => {
    const { status, result } = await userService.deleteUser(req)
    res.status(status).json(result);
}

const getUser = async(req, res) => {
    const { status, result } = await userService.getUser(req)
    res.status(status).json(result);
}

const getAllUser = async (req, res) => {
    const { status, result } = await userService.getAllUser(req)
    res.status(status).json(result);
}

const login = async (req, res) => {
    const { status, result } = await userService.login(req)
    res.status(status).json(result);
}

const register = async (req, res) => {
    const { status, result } = await userService.register(req)
    res.status(status).json(result);
}

const validateAuthCode = async (req, res) => {
    const { status, result } = await userService.validateAuthCode(req)
    res.status(status).json(result);
}

const getTrips = async (req, res) => {
    const { status, result } = await userService.getTrips(req)
    res.status(status).json(result);
}

const getBids = async (req, res) => {
    const { status, result } = await userService.getBids(req)
    res.status(status).json(result);
}

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUser,
    login,
    register,
    validateAuthCode,
    getTrips,
    getBids
};