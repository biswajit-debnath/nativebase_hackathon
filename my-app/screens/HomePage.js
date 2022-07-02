import { Container, Text } from "native-base";
import React from "react";
import Bids from "../tabs/Bids";
import Loads from "../tabs/Loads";
import Trips from "../tabs/Trips";

export default function HomePage() {
    return (
        <Tabs>
            <Tab heading="Loads">
                <Loads />
            </Tab>
            <Tab heading="Bids">
                <Bids />
            </Tab>
            <Tab heading="Trips">
                <Trips />
            </Tab>
        </Tabs>
    );
}
