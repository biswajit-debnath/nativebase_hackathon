import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack, NativeBaseProvider, Spinner } from "native-base";
import React, { useEffect, useMemo, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import AuthScreen from "./screens/AuthScreen";
import HomePage from "./screens/HomePage";
import Bids from "./tabs/Bids";
import authHelper from "./utils/authHelper";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(async () => {
        const token = await authHelper.getToken();
        setIsSignedIn(Boolean(token));
        setLoading(false);
    }, []);

    const authContextValue = useMemo(
        () => ({
            isSignedIn,
            setIsSignedIn,
        }),
        [isSignedIn]
    );

    if (isLoading) {
        return (
            <NativeBaseProvider>
                <HStack
                    space={8}
                    justifyContent="center"
                    alignItems="center"
                    height="full"
                    width="full"
                >
                    <Spinner size="lg" />
                </HStack>
            </NativeBaseProvider>
        );
    }

    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <AuthContext.Provider value={authContextValue}>
                    <Stack.Navigator initialRouteName="Home">
                        {!isSignedIn ? (
                            <Stack.Screen
                                name="Auth"
                                component={AuthScreen}
                                options={{ headerShown: false }}
                            />
                        ) : (
                            <>
                                <Stack.Screen
                                    name="Home"
                                    component={HomePage}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Bids"
                                    component={Bids}
                                    options={{ headerShown: false }}
                                />
                            </>
                        )}
                    </Stack.Navigator>
                </AuthContext.Provider>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
