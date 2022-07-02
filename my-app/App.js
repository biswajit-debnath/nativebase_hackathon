import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Center, extendTheme, NativeBaseProvider } from "native-base";
import HomePage from "./screens/HomePage";

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Center
                _dark={{ bg: "blueGray.900" }}
                _light={{ bg: "blueGray.50" }}
                px={4}
                flex={1}
            >
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomePage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Center>
        </NativeBaseProvider>
    );
}
