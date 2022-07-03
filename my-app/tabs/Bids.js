import { Container, HStack, Icon, Text, Fab, AddIcon, Heading, Box, Avatar, FlatList, VStack, Spacer, useToast } from "native-base";
import React from "react";
import BidList from "../components/BidList";

export default function Bids({ route }) {
    const { loadId } = route.params;
    return (
       <BidList loadId={loadId}/>
    );
}
