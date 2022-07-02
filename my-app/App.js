import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import HomePage from "./screens/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomePage} />
                </Stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
