import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    Input,
    useToast,
} from "native-base";
import React, { useContext, useState } from "react";
import { Keyboard } from "react-native";
import AuthContext from "../contexts/AuthContext";
import api from "../apis";
import authHelper from "../utils/authHelper";

export default function LoginForm({ isCarrierUser, changeUserMode }) {
    const toast = useToast();
    const { setIsSignedIn } = useContext(AuthContext);

    const [formData, setData] = React.useState({
        phone: "",
        otp: "",
        authId: "",
    });

    const [otpSent, setOtpSent] = useState(false);

    const loginUser = async () => {
        const userType = isCarrierUser ? "CARRIER" : "FREIGHTER";
        console.log(userType,"isCarrier")

        if (!formData.otp) {
            return toast.show({
                description: "OTP is required.",
                bgColor: "red.600",
            });
        }

        const result = await api.validateAuthCode(
            formData.authId,
            formData.otp,
            "login",
            formData.name || "",
            formData.phone,
            formData.vehicleTypeId || "",
            formData.vehicleNo || "",
            userType
        );

        console.log(result, "result for login");

        if (result.status === "success") {
            await authHelper.setToken(result.data?.id);
            await authHelper.setUserType(result.data.userType);
            console.log("userType",await authHelper.setUserType(result.data.userType))
            return setIsSignedIn(Boolean(result.data?.id));
        }

        return toast.show({
            description: result.message || "Request failed.",
            bgColor: "red.600",
        });
    };

    const onSubmit = async () => {
        Keyboard.dismiss();

        if (otpSent) {
            return loginUser();
        }

        const { phone } = formData;

        if (!phone) {
            return toast.show({
                description: "Please fill the phone number.",
                bgColor: "red.600",
            });
        }

        const result = await api.login(
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
                    <Heading>
                        {isCarrierUser ? "CARRIER" : "FREIGHTER"} LOGIN
                    </Heading>
                </Center>
                <FormControl width={280} py={4} px={4} isRequired>
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
                                ? "Freighter Login"
                                : "Carrier Login"}
                        </Button>
                    ) : null}
                </FormControl>
            </Box>
        </Center>
    );
}
