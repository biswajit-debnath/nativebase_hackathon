import {
    Box,
    Button,
    Center,
    CheckIcon,
    FormControl,
    Heading,
    Input,
    Select,
    useToast,
} from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import AuthContext from "../contexts/AuthContext";
import api from "../apis";
import authHelper from "../utils/authHelper";

export default function RegisterForm({ isCarrierUser, changeUserMode }) {
    const toast = useToast();
    const { setIsSignedIn } = useContext(AuthContext);

    const [formData, setData] = React.useState({
        name: "",
        phone: "",
        vehicleTypeId: "",
        vehicleNo: "",
        otp: "",
        authId: "",
    });

    const [otpSent, setOtpSent] = useState(false);
    const [vehicleList, setVehicleList] = useState([]);

    useEffect(async () => {
        if (!isCarrierUser) setVehicleList([]);
        const vehicleList = await api.getVehicleMaster();
        setVehicleList(vehicleList);
    }, [isCarrierUser]);

    const registerUser = async () => {
        const userType = isCarrierUser ? "CARRIER" : "FREIGHTER";

        if (!formData.otp) {
            return toast.show({
                description: "OTP is required.",
                bgColor: "red.600",
            });
        }

        const result = await api.validateAuthCode(
            formData.authId,
            formData.otp,
            "register",
            formData.name,
            formData.phone,
            formData.vehicleTypeId,
            formData.vehicleNo,
            userType
        );

        if (result.status === "success") {
            await authHelper.setToken(result.data?._id);
            await authHelper.setUserType(result.data?.userType);
            return setIsSignedIn(Boolean(result.data?._id));
        }

        return toast.show({
            description: result.message || "Request failed.",
            bgColor: "red.600",
        });
    };

    const onSubmit = async () => {
        Keyboard.dismiss();

        if (otpSent) {
            return registerUser();
        }

        const { name, phone, vehicleNo, vehicleTypeId } = formData;

        if (!name || !phone) {
            return toast.show({
                description: "Please fill the required fields.",
                bgColor: "red.600",
            });
        }

        if (isCarrierUser && (!vehicleNo || !vehicleTypeId)) {
            return toast.show({
                description: "Please fill the required fields.",
                bgColor: "red.600",
            });
        }

        const result = await api.register(
            phone,
            isCarrierUser ? "CARRIER" : "FREIGHTER"
        );

        if (result.status === "success") {
            setOtpSent(true);
            setData({
                ...formData,
                authId: result.authId,
            });
            return toast.show({
                description: "OTP sent to the provided mobile number.",
                bgColor: "green.600",
            });
        }

        return toast.show({
            description: result.message || "Request failed.",
            bgColor: "red.600",
        });
    };

    return (
        <Center width={400} height={600}>
            <Box bgColor="white" borderRadius={10}>
                <Center height={50}>
                    <Heading>REGISTER</Heading>
                </Center>
                <FormControl width={280} py={4} px={4} isRequired>
                    <FormControl.Label
                        _text={{
                            bold: true,
                        }}
                        mt={3}
                    >
                        Name
                    </FormControl.Label>
                    <Input
                        placeholder="John"
                        onChangeText={(value) =>
                            setData({ ...formData, name: value })
                        }
                        value={formData.name}
                        type="text"
                        isDisabled={otpSent}
                    />

                    <FormControl.Label
                        _text={{
                            bold: true,
                        }}
                        mt={3}
                    >
                        Phone
                    </FormControl.Label>
                    <Input
                        placeholder="91xxxxxxxx"
                        onChangeText={(value) =>
                            setData({ ...formData, phone: value })
                        }
                        value={formData.phone}
                        type="number"
                        isDisabled={otpSent}
                    />

                    {isCarrierUser ? (
                        <>
                            <FormControl.Label
                                _text={{
                                    bold: true,
                                }}
                                mt={3}
                            >
                                Vehicle Number
                            </FormControl.Label>
                            <Input
                                placeholder="KA09IL9090"
                                onChangeText={(value) =>
                                    setData({ ...formData, vehicleNo: value })
                                }
                                value={formData.vehicleNo}
                                type="text"
                                isDisabled={otpSent}
                            />

                            <FormControl.Label
                                _text={{
                                    bold: true,
                                }}
                                mt={3}
                            >
                                Vehicle Type
                            </FormControl.Label>
                            <Select
                                selectedValue={formData.vehicleTypeId}
                                minWidth="200"
                                accessibilityLabel="Vehicle Type"
                                placeholder="Vehicle Type"
                                _selectedItem={{
                                    bg: "blueGray.200",
                                    endIcon: <CheckIcon size="5" />,
                                    borderRadius: 8,
                                }}
                                onValueChange={(itemValue) =>
                                    setData({
                                        ...formData,
                                        vehicleTypeId: itemValue,
                                    })
                                }
                                isDisabled={otpSent}
                            >
                                {Object.values(vehicleList).map(
                                    ({ _id, name, capacity, unit }) => (
                                        <Select.Item
                                            key={_id}
                                            label={`${name} - ${capacity}${unit}`}
                                            value={_id}
                                        />
                                    )
                                )}
                            </Select>
                        </>
                    ) : null}

                    {otpSent ? (
                        <>
                            <FormControl.Label
                                _text={{
                                    bold: true,
                                }}
                                mt={3}
                            >
                                Verification Code
                            </FormControl.Label>
                            <Input
                                placeholder="X X X X X X"
                                onChangeText={(value) =>
                                    setData({ ...formData, otp: value })
                                }
                                value={formData.otp}
                                type="text"
                            />
                        </>
                    ) : null}

                    <Button onPress={onSubmit} bgColor="blueGray.800" mt={5}>
                        Submit
                    </Button>

                    {!otpSent ? (
                        <Button
                            onPress={changeUserMode}
                            variant="outline"
                            _text={{
                                color: "blueGray.800",
                            }}
                            mt={5}
                        >
                            {isCarrierUser
                                ? "Register As Freighter"
                                : "Register As Carrier"}
                        </Button>
                    ) : null}
                </FormControl>
            </Box>
        </Center>
    );
}
