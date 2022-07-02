import { Container, HStack, Icon, Text, Fab, AddIcon, Heading, Box, Avatar, FlatList, VStack, Spacer, useToast } from "native-base";
import React from "react";
import LoadItem from "../components/LoadItem"
import LoadPostModel from "../components/LoadPostModel";
import BidModel from "../components/BidModel";

export default function Loads() {
    const [loadPostModalVisible, setLoadPostModalVisible] = React.useState(false);

    
    const data = [{
        id:1,
        loadingPoint:"Beltola, Guwahati, Assam",
        unloadingPoint:"White field, Bangalore, Karnataka",
        vehicleCapacity:"12 MT",
        vehicleType:"Daala Body",
        loadingDate:"12-07-2022",
    },
    {   
        id:2,
        loadingPoint:"Beltola, Guwahati, Assam",
        unloadingPoint:"White field, Bangalore, Karnataka",
        vehicleCapacity:"Daala Body",
        vehicleType:"12 MT",
        loadingDate:"12-07-2022",
    }];

    return (
        <Container safeArea px={5} py={3} position="relative">    
            <FlatList 
                width={370}
                data={data}
                renderItem={({item})=>
                    <LoadItem 
                        {...item} />
                }
                keyExtractor={item => item.id} 
            />
            <Fab 
                position ="absolute"
                shadow ={2}
                bottom ="20" 
                height ="12"
                width ="12"
                bgColor ="blueGray.700"
                onPress ={()=> setModalVisible(true)}
                icon ={<AddIcon />} />
            
            <LoadPostModel 
                isOpen = {loadPostModalVisible}
                setOpen = {setLoadPostModalVisible}
                />
            
        </Container>
    );
}
