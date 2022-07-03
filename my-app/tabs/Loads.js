import {
    Container,
    HStack,
    Icon,
    Text,
    Fab,
    AddIcon,
    Heading,
    Box,
    Avatar,
    FlatList,
    VStack,
    Spacer,
    useToast,
} from "native-base";
import React, { useEffect, useState } from "react";
import api from "../apis";
import LoadItem from "../components/LoadItem";
import LoadPostModel from "../components/LoadPostModel";

export default function Loads() {
    const [loadPostModalVisible, setLoadPostModalVisible] = useState(false);

    const [data, setData] = useState([]);

    useEffect(async () => {
        if (!loadPostModalVisible) {
            const result = await api.getFreighterLoads();

            console.log(result);

            if (result.status === "success") {
                setData(result?.data || []);
            }
        }
    }, [loadPostModalVisible]);

    return (
        <Container safeArea px={3} py={3} position="relative">
            <FlatList
                width={370}
                data={data}
                renderItem={({ item }) => <LoadItem {...item} />}
                keyExtractor={(item) => item.id}
            />
            <Fab
                position="absolute"
                shadow={2}
                bottom="20"
                height="12"
                width="12"
                bgColor="blueGray.700"
                onPress={() => setLoadPostModalVisible(true)}
                icon={<AddIcon />}
            />

            <LoadPostModel
                isOpen={loadPostModalVisible}
                setOpen={setLoadPostModalVisible}
            />
        </Container>
    );
}
