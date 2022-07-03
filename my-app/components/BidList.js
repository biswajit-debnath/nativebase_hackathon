import { Container, HStack, Icon, Text, Fab, AddIcon, Heading, Box, Avatar, FlatList, VStack, Spacer, useToast } from "native-base";
import React, { useState, useEffect } from 'react'
import BidItem from "./BidItem";
import api from "../apis";
import authHelper from "../utils/authHelper";

export default function BidList({loadId}) {
    const [data,setData] = useState([])

    useEffect(async () => {
            const isFreighter = await authHelper.getUserType() == "FREIGHTER"; 
            const result = !isFreighter 
                            ? await api.getBidsByCarrierId()
                            : await api.getBidsByFreighterId();
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