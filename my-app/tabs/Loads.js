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
import authHelper from "../utils/authHelper";

export default function Loads(props) {
    const [loadPostModalVisible, setLoadPostModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [showFab, setShowFab] = useState(false);

    useEffect(async () => {
        if (!loadPostModalVisible) {
            const isFreighter = await authHelper.getUserType() == "FREIGHTER"; 
            const result = isFreighter
                            ? await api.getFreighterLoads() 
                            : await api.getCarrierLoads();

            if (result.status === "success") {
                setData(result?.data || []);
            }
        }
    }, [loadPostModalVisible]);

    useEffect(async ()=> {
        //await authHelper.setToken("")
        const isFreighter = await authHelper.getUserType() == "FREIGHTER"; 
        setShowFab(isFreighter) 
    },[])

    return (
        <Container safeArea px={3} py={3} position="relative">
            <FlatList
                width={370}
                data={data}
                renderItem={({ item }) => (
                    <LoadItem navigation={props.navigation} {...item} />
                )}
                keyExtractor={(item) => item.id}
            />
            {showFab && (props.route.name == "Loads") ? (
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
            ) : null}

            <LoadPostModel
                isOpen={loadPostModalVisible}
                setOpen={setLoadPostModalVisible}
            />
        </Container>
    );
}
