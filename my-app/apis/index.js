import axios from "axios";
import authHelper from "../utils/authHelper";

const BASE_URL = "http://192.168.3.176:3000";

const register = async (number, userType) => {
    try {
        const result = await axios.post(`${BASE_URL}/user/register`, {
            number,
            userType,
        });
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const login = async (number, userType) => {
    try {
        const result = await axios.post(`${BASE_URL}/user/login`, {
            number,
            userType,
        });
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const validateAuthCode = async (
    id,
    authCode,
    type,
    name,
    number,
    vehicleTypeId,
    vehicleNo,
    userType
) => {
    try {
        const result = await axios.post(`${BASE_URL}/user/validateAuthCode`, {
            id,
            authCode,
            type,
            name,
            number,
            vehicleTypeId,
            vehicleNo,
            userType,
        });
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const getVehicleMaster = async () => {
    try {
        const result = await axios.get(`${BASE_URL}/vehicle/getAll`);
        return result.data;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const createLoad = async (from, to, prod_type, weight, date, max_amount) => {
    try {
        const user_id = await authHelper.getToken();
        const result = await axios.post(`${BASE_URL}/load/post`, {
            user_id,
            from,
            to,
            prod_type,
            weight,
            date,
            max_amount,
        });
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const deleteLoad = async (loadId) => {
    try {
        const result = await axios.delete(`${BASE_URL}/load/delete/${loadId}`);
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const getFreighterLoads = async () => {
    try {
        const user_id = await authHelper.getToken();
        const result = await axios.get(
            `${BASE_URL}/load/getAllLoads/${user_id}`
        );
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const getBidsByLoadId = async (loadId) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/bid/getAllBidsOfLoad/${loadId}`
        );
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const acceptBid = async (load_id, bid_id) => {
    try {
        const result = await axios.post(`${BASE_URL}/trip/post`, {
            load_id,
            bid_id,
        });
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

const rejectBid = async (bid_id) => {
    try {
        const result = await axios.get(`${BASE_URL}/bid/rejectBid/${bid_id}`);
        return result.data;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

export default {
    register,
    login,
    validateAuthCode,
    getVehicleMaster,
    createLoad,
    getFreighterLoads,
    deleteLoad,
};
