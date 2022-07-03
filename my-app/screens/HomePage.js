import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "native-base";
import React from "react";
import Bids from "../tabs/Bids";
import Loads from "../tabs/Loads";
import Trips from "../tabs/Trips";

import LoadIcon_Dark from "../assets/loads_dark.png";
import Bidding_Dark from "../assets/bidding_dark.png";
import Trips_Dark from "../assets/trips_dark.png";

import LoadIcon_Light from "../assets/loads_light.png";
import Bidding_Light from "../assets/bidding_light.png";
import Trips_Light from "../assets/trips_light.png";

const Tab = createBottomTabNavigator();

export default function HomePage() {
    const navOptions = {
        headerShown: false,
        tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
        },
        tabBarStyle: {
            height: 58,
            padding: 10,
        },
        tabBarActiveTintColor: "#1e293b",
        tabBarInactiveTintColor: "#cbd5e1",
    };
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Loads"
                component={Loads}
                tabBarLabel={(label) => {
                    <Text color="blueGray.800" bold>
                        {label}
                    </Text>;
                }}
                options={{
                    ...navOptions,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? LoadIcon_Dark : LoadIcon_Light}
                            style={{ width: 25, height: 25 }}
                            alt="Load Icon"
                        />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Bids"
                component={Bids}
                options={{
                    ...navOptions,
                    tabBarIcon: ({focused}) => (<Image
                        source={focused ? Bidding_Dark : Bidding_Light} style={{ width: 25, height: 25 }} alt="Bid Icon" />)
                    }}
            /> */}
            <Tab.Screen
                name="Trips"
                component={Trips}
                options={{
                    ...navOptions,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? Trips_Dark : Trips_Light}
                            style={{ width: 25, height: 25 }}
                            alt="Trip Icon"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
