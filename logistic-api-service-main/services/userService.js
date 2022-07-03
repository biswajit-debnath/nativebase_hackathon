const UsersModel = require("../models/users");
const UserAuthModel = require("../models/userAuth");
const CarriersModel = require("../models/carriers");
const BidsModel = require('../models/bids');
var moment = require("moment");
const TripsModel = require("../models/trips");
const VehiclesModel = require('../models/vehicles');


const { ObjectId } = require("mongodb");
// const twilio = require('twilio');

const addUser = async (req) => {
    const data = new UsersModel({
        id: new ObjectId().toString(),
        name: req.body.name,
        number: req.body.number,
    });

    try {
        const res = await UsersModel.find({
            name: req.body.name,
            number: req.body.number,
        });
        if (res.length > 0) {
            return {
                status: 409,
                result: {
                    message: "Logged In",
                    data: {
                        name: res[0].name,
                        number: res[0].number,
                    },
                    token: res[0].id,
                },
            };
        } else {
            const res = await UsersModel.find({
                number: req.body.number,
            });
            if (res.length > 0) {
                return {
                    status: 409,
                    result: {
                        message: "Number already exists",
                    },
                };
            }
        }
        const dataToSave = await data.save();
        return {
            status: 200,
            result: {
                message: "User Created",
                data: {
                    name: dataToSave.name,
                    number: dataToSave.number,
                },
                token: dataToSave.id,
            },
        };
    } catch (error) {
        return {
            status: 400,
            result: { message: error.message },
        };
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const number = req.body.number;

        await UsersModel.findOneAndUpdate(
            { id },
            {
                $set: {
                    name,
                    number,
                },
            }
        );
        const data = await UsersModel.find({
            id,
        });
        return {
            status: 200,
            result: data,
        };
    } catch (error) {
        return {
            status: 400,
            result: { message: error.message },
        };
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await UsersModel.findOneAndDelete({ id });
        return {
            status: 200,
            result: `Document with ${data.name} has been deleted..`,
        };
    } catch (error) {
        return {
            status: 400,
            result: { message: error.message },
        };
    }
};

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await UsersModel.find({
            id,
        });
        return {
            status: 200,
            result: data,
        };
    } catch (error) {
        return {
            status: 400,
            result: { message: error.message },
        };
    }
};

const getAllUser = async (req, res) => {
    try {
        const data = await UsersModel.find();
        return {
            status: 200,
            result: data,
        };
    } catch (error) {
        return {
            status: 400,
            result: { message: error.message },
        };
    }
};

const login = async (req) => {
    try {
        const number = req.body.number;
        let data;
        if (req.body.userType == "CARRIER") {
            data = await CarriersModel.find({
                number,
            });
        } else {
            data = await UsersModel.find({
                number,
            });
        }

        if (data.length > 0) {
            // send otp and verify
            // const accountSid = 'ACdfebb762e78b865bfdfcbaf85b46b906';
            // const authToken = 'e64cbdf1b9cd591dda0b5ef099a0146e';
            // const client = new twilio(accountSid, authToken);
            const otp = 123456;
            console.log("otp is ", otp);
            // client.messages
            // .create({
            //     body: 'Your otp to login is ' + otp,
            //     to: '+917569327146', // Text this number
            //     from: '+14409965054', // From a valid Twilio number
            // })
            // .then((message) => console.log(message.sid))
            // .catch((err) => console.log("message.sid," ,err));

            const authId = new ObjectId().toString();
            const data = new UserAuthModel({
                id: authId,
                authCode: otp,
                expiry: moment().add(15, "minutes").utc().format(),
            });
            await data.save();
            return {
                status: 200,
                result: {
                    status: "success",
                    authId: authId,
                },
            };
        } else {
            // return error
            return {
                status: 200,
                result: {
                    status: "error",
                    message: "Number doesnt exists",
                },
            };
        }
    } catch (error) {
        return {
            status: 400,
            result: { message: error.message },
        };
    }
};

const register = async (req) => {
    try {
        const number = req.body.number;
        let data;
        if (req.body.userType == "CARRIER") {
            data = await CarriersModel.find({
                number,
            });
        } else {
            data = await UsersModel.find({
                number,
            });
        }

        if (data.length == 0) {
            // send otp and verify
            // const accountSid = 'ACdfebb762e78b865bfdfcbaf85b46b906';
            // const authToken = 'e64cbdf1b9cd591dda0b5ef099a0146e';
            // const client = new twilio(accountSid, authToken);
            const otp = 123456;
            console.log("otp is ", otp);
            // client.messages
            // .create({
            //     body: 'Your otp to login is ' + otp,
            //     to: '+917569327146', // Text this number
            //     from: '+14409965054', // From a valid Twilio number
            // })
            // .then((message) => console.log(message.sid))
            // .catch((err) => console.log("message.sid," ,err));

            const authId = new ObjectId().toString();
            const data = new UserAuthModel({
                id: authId,
                authCode: otp,
                expiry: moment().add(15, "minutes").utc().format(),
            });
            await data.save();
            return {
                status: 200,
                result: {
                    status: "success",
                    authId: authId,
                },
            };
        } else {
            // return error
            return {
                status: 200,
                result: {
                    status: "error",
                    message: "Number exists already",
                },
            };
        }
    } catch (error) {
        return {
            status: 400,
            result: { message: error.message },
        };
    }
};

const validateAuthCode = async (req, res) => {
    try {
        const data = await UserAuthModel.find({
            id: req.body.id,
            authCode: req.body.authCode,
        });
        if (data.length > 0) {
            const type = req.body.type;
            const number = req.body.number;
            if (type == "register") {
                let res;
                let data;
                if (req.body.userType == "CARRIER") {
                    res = await CarriersModel.find({
                        number,
                    });
                    data = new CarriersModel({
                        id: new ObjectId().toString(),
                        name: req.body.name,
                        number: req.body.number,
                        vehicleTypeId: req.body.vehicleTypeId,
                        vehicleNo: req.body.vehicleNo,
                    });
                } else {
                    res = await UsersModel.find({
                        number,
                    });
                    data = new UsersModel({
                        id: new ObjectId().toString(),
                        name: req.body.name,
                        number: req.body.number,
                    });
                }
                if (res.length > 0) {
                    return {
                        status: 200,
                        result: {
                            status: "error",
                            message: "Number already exists",
                        },
                    };
                } else {
                    const dataToSave = await data.save();
                    dataToSave["userType"] = req.body.userType;
                    return {
                        status: 200,
                        result: {
                            status: "success",
                            data: dataToSave,
                        },
                    };
                }
            } else {
                let res;
                if (req.body.userType == "CARRIER") {
                    res = await CarriersModel.findOne({
                        number,
                    });
                } else {
                    res = await UsersModel.findOne({
                        number,
                    });
                }
                res.userType = req.body.userType;
                console.log("res", req.body, res);
                return {
                    status: 200,
                    result: {
                        status: "success",
                        data: {
                            id: res.id,
                            name: res.name,
                            number: res.number,
                            vehicleTypeId: res.vehicleTypeId || null,
                            vehicleNo: res.vehicleNo || null,
                            userType: req.body.userType,
                        },
                    },
                };
            }
        } else {
            return {
                status: 200,
                result: {
                    status: "error",
                    message: "error",
                },
            };
        }
    } catch (error) {
        return {
            status: 400,
            result: {
                status: "error",
                message: "error",
            },
        };
    }
};

const getTrips = async (req) => {
    try {
        const id = req.params.id;
        const data = await TripsModel.find({
            user_id: id,
        });
        return {
            status: 200,
            result: {
                status: "success",
                data,
            },
        };
    } catch (error) {
        return {
            status: 400,
            result: {
                status: "error",
                message: error.message,
            },
        };
    }
};

const getBids = async (req) => {
    try {
        const id = req.params.id;
        const data = await BidsModel.find({
            user_id: id,
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
            status: 200,
            result: {
                status: "success",
                data,
            },
        };
    } catch (error) {
        return {
            status: 400,
            result: {
                status: "error",
                message: error.message,
            },
        };
    }
};

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
