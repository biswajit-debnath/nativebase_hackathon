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
import React, { useContext } from "react";
import { Keyboard } from "react-native";
import AuthContext from "../contexts/AuthContext";

export default function LoginForm({ isCarrierLogin, changeLoginMode }) {
    const toast = useToast();
    const { setIsSignedIn } = useContext(AuthContext);

    const [formData, setData] = React.useState({
        name: "",
        phone: "",
        vehicleTypeId: "",
        vehicleNo: "",
    });

    const vehicleList = {
        1: {
            _id: 1,
            name: "Bulker",
            capacity: 12,
            unit: "MT",
        },
        2: {
            _id: 2,
            name: "Truck",
            capacity: 16,
            unit: "MT",
        },
    };

    const handleLogin = async () => {
        Keyboard.dismiss();

        const { name, phone, vehicleNo, vehicleTypeId } = formData;

        if (!name || !phone) {
            return toast.show({
                description: "Please fill the required fields.",
                bgColor: "red.600",
            });
        }

        if (isCarrierLogin && (!vehicleNo || !vehicleTypeId)) {
            return toast.show({
                description: "Please fill the required fields.",
                bgColor: "red.600",
            });
        }

        setIsSignedIn(true);

        return toast.show({
            description: "Login success.",
            bgColor: "green.600",
        });
    };

    return (
        <Center width={400} height={600}>
            <Box bgColor="white" borderRadius={10}>
                <Center height={50}>
                    <Heading>LOGIN</Heading>
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
                    />

                    {isCarrierLogin ? (
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
                            />

                            <FormControl.Label
                                _text={{
                                    bold: true,
                                }}
                                mt={3}
                            >
                                Vehicle Number
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

                    <Button onPress={handleLogin} bgColor="blueGray.800" mt={5}>
                        Submit
                    </Button>

                    <Button
                        onPress={changeLoginMode}
                        variant="outline"
                        _text={{
                            color: "blueGray.800",
                        }}
                        mt={5}
                    >
                        {isCarrierLogin
                            ? "Go to freighter login"
                            : "Go to carrier login"}
                    </Button>
                </FormControl>
            </Box>
        </Center>
    );
}
