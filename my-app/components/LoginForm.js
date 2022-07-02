import { FormControl, Input, VStack } from "native-base";
import React from "react";

export default function LoginForm() {
    const [formData, setData] = React.useState({});
    return (
        <VStack width="90%" mx="3" maxW="300px">
            <FormControl isRequired>
                <FormControl.Label
                    _text={{
                        bold: true,
                    }}
                >
                    Name
                </FormControl.Label>
                <Input
                    placeholder="John"
                    onChangeText={(value) =>
                        setData({ ...formData, name: value })
                    }
                    value={formData.name}
                />
                <FormControl.HelperText
                    _text={{
                        fontSize: "xs",
                    }}
                >
                    Name should contain atleast 3 character.
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                    _text={{
                        fontSize: "xs",
                    }}
                >
                    Error Name
                </FormControl.ErrorMessage>

                <FormControl.Label
                    _text={{
                        bold: true,
                    }}
                >
                    Phone
                </FormControl.Label>
                <Input
                    placeholder="98xxxxxxxx"
                    onChangeText={(value) =>
                        setData({ ...formData, phone: value })
                    }
                    value={formData.phone}
                />
                <FormControl.HelperText
                    _text={{
                        fontSize: "xs",
                    }}
                >
                    Phone number should be of 10 digits.
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                    _text={{
                        fontSize: "xs",
                    }}
                >
                    Error Name
                </FormControl.ErrorMessage>
            </FormControl>
        </VStack>
    );
}
