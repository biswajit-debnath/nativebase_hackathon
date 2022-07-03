import { Container, HStack, Icon, Text, Fab, AddIcon, Heading, Box, Avatar, FlatList, VStack, Spacer, useToast } from "native-base";
import React, { useState, useEffect } from 'react'
import BidItem from "./BidItem";
import api from "../apis";

export default function BidList({loadId}) {
    const [data,setData] = useState([])

    useEffect(async () => {
            const result = loadId ? await api.getBidsByLoadId(loadId) : await api.getBidsByUserId();
            console.log(result);
            if (result.status === "success") {
                setData(result?.data || []);
            }
    },[]);
  return (
    <Container safeArea px={5} py={3} position="relative">   
    {
        data.length ? <FlatList 
                            width={370}
                            data={data}
                            renderItem={({item})=>
                                <BidItem 
                                    {...item} />
                            }
                            keyExtractor={item => item.id} 
                        />
                    :
                    <Text >No Bids Found</Text>
    } 
    
    </Container>
  )
}