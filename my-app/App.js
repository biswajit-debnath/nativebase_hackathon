import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import React, { useMemo, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import FreighterLogin from "./screens/FreighterLogin";
import HomePage from "./screens/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const authContextValue = useMemo(
        () => ({
            isSignedIn,
            setIsSignedIn,
        }),
        [isSignedIn]
    );
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <AuthContext.Provider value={authContextValue}>
                    <Stack.Navigator initialRouteName="Home">
                        {!isSignedIn ? (
                            <Stack.Screen
                                name="Login"
                                component={FreighterLogin}
                                options={{ headerShown: false }}
                            />
                        ) : (
                            <Stack.Screen
                                name="Home"
                                component={HomePage}
                                options={{ headerShown: false }}
                            />
                        )}
                    </Stack.Navigator>
                </AuthContext.Provider>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
