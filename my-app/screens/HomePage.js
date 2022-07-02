import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Bids from "../tabs/Bids";
import Loads from "../tabs/Loads";
import Trips from "../tabs/Trips";

const Tab = createBottomTabNavigator();

export default function HomePage() {
    const isLoggedIn = "";

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Loads"
                component={Loads}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Bids"
                component={Bids}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Trips"
                component={Trips}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}
