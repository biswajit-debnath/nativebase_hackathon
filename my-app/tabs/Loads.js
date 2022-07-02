import { Container, HStack, Icon, Text, Fab, AddIcon, Heading, Box, Avatar, FlatList, VStack, Spacer } from "native-base";
import React from "react";
import LoadItem from "../components/LoadItem"

export default function Loads() {
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
        <Container safeArea px={5} py={3}>    
                    <FlatList 
                        width={370}
                        data={data}
                        renderItem={({item})=>
                            <LoadItem 
                                {...item} />
                        }
                        keyExtractor={item => item.id} 
                    />
                <Fab shadow={2} size="sm" icon={<Icon color="white" as={AddIcon} name="plus" size="sm" />} />
        </Container>
    );
}
