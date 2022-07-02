import { Center, Container, Text, View, VStack } from "native-base";
import React from "react";

export default function HomePage() {
    console.log("hello");

    return (
        <View>
            <VStack>
                <Center>
                    <Text>hello world</Text>
                </Center>
            </VStack>
        </View>
    );
}
