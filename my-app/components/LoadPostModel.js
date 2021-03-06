import {
    Button,
    CheckIcon,
    FormControl,
    Input,
    Modal,
    Select,
    Text,
    useToast,
} from "native-base";
import React from "react";
import { Keyboard } from "react-native";
import moment from "moment";
import api from "../apis";

const cities = [
    "Bengaluru",
    "Delhi",
    "Kolkata",
    "Indore",
    "Chennai",
    "Guwahati",
    "Jaipur",
    "Hyderabad",
];

export default function LoadPostModel({ isOpen, setOpen }) {
    const toast = useToast();
    const [formData, setData] = React.useState({
        loadingPoint: "",
        unloadingPoint: "",
        productType: "",
        weight: "",
        loadingDate: "",
        maxAmount: "",
    });

    const onSubmit = async () => {
        Keyboard.dismiss();

        const {
            loadingPoint,
            unloadingPoint,
            productType,
            weight,
            loadingDate,
            maxAmount,
        } = formData;

        if (
            !loadingPoint ||
            !unloadingPoint ||
            !productType ||
            !weight ||
            !loadingDate ||
            !maxAmount
        ) {
            return toast.show({
                description: "Please fill the required fields.",
                bgColor: "red.600",
                placement: "top",
            });
        }

        const result = await api.createLoad(
            loadingPoint,
            unloadingPoint,
            productType,
            weight,
            moment(loadingDate, "DD-MM-YYYY").utc().format(),
            maxAmount
        );


        if (result.status === "success") {
            setOpen(false);

            return toast.show({
                description: "Load Posted.",
                bgColor: "green.600",
                placement: "top",
            });
        }

        return toast.show({
            description: result.message || "Request failed.",
            bgColor: "red.600",
            placement: "top",
        });
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            safeAreaTop={true}
        >
            <Modal.Content maxWidth="380">
                <Modal.CloseButton />
                <Modal.Header>
                    <Text bold>Post Load</Text>
                </Modal.Header>
                <Modal.Body>
                    <FormControl width="full" px={4} isRequired>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Loading Point
                        </FormControl.Label>
                        <Select
                            selectedValue={formData.loadingPoint}
                            minWidth="200"
                            accessibilityLabel="Loading point"
                            placeholder="Loading Point"
                            _selectedItem={{
                                bg: "blueGray.200",
                                endIcon: <CheckIcon size="5" />,
                                borderRadius: 8,
                            }}
                            onValueChange={(itemValue) =>
                                setData({
                                    ...formData,
                                    loadingPoint: itemValue,
                                })
                            }
                        >
                            {cities.map((city, index) => (
                                <Select.Item
                                    key={index}
                                    label={city}
                                    value={city}
                                />
                            ))}
                        </Select>

                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                            mt={3}
                        >
                            Unloading Point
                        </FormControl.Label>
                        <Select
                            selectedValue={formData.unloadingPoint}
                            minWidth="200"
                            accessibilityLabel="Unloading point"
                            placeholder="Unloading Point"
                            _selectedItem={{
                                bg: "blueGray.200",
                                endIcon: <CheckIcon size="5" />,
                                borderRadius: 8,
                            }}
                            onValueChange={(itemValue) =>
                                setData({
                                    ...formData,
                                    unloadingPoint: itemValue,
                                })
                            }
                        >
                            {cities.map((city, index) => (
                                <Select.Item
                                    key={index}
                                    label={city}
                                    value={city}
                                />
                            ))}
                        </Select>

                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                            mt={3}
                        >
                            Product Type
                        </FormControl.Label>
                        <Input
                            placeholder="Film Equipments"
                            onChangeText={(value) =>
                                setData({ ...formData, productType: value })
                            }
                            value={formData.productType}
                            type="text"
                        />

                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                            mt={3}
                        >
                            Estimated Weight
                        </FormControl.Label>
                        <Input
                            placeholder="12 MT"
                            onChangeText={(value) =>
                                setData({ ...formData, weight: value })
                            }
                            value={formData.weight}
                            type="number"
                        />

                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                            mt={3}
                        >
                            Loading Date
                        </FormControl.Label>
                        <Input
                            placeholder="DD-MM-YYYY"
                            onChangeText={(value) =>
                                setData({ ...formData, loadingDate: value })
                            }
                            value={formData.loadingDate}
                            type="text"
                        />

                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                            mt={3}
                        >
                            Maximum Amount
                        </FormControl.Label>
                        <Input
                            placeholder="Amount In Rs."
                            onChangeText={(value) =>
                                setData({ ...formData, maxAmount: value })
                            }
                            value={formData.maxAmount}
                            type="number"
                        />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onPress={onSubmit}
                        bgColor="blueGray.800"
                        width={"full"}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}
