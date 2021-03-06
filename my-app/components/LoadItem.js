import {
    Avatar,
    Box,
    HStack,
    Icon,
    InfoIcon,
    Text,
    VStack,
    Button,
    Image,
    Input,
    useToast,
    Badge,
} from "native-base";
import React,{useState,useEffect} from "react";
import loadingImage from "../assets/loading.png";
import unloadingImage from "../assets/unloading.png";
import moment from "moment";
import authHelper from "../utils/authHelper";
import apis from "../apis";

function LoadItem({
    from: loadingPoint,
    to: unloadingPoint,
    weight,
    date,
    max_amount,
    id,
    isActive
}) {
    const [isCarrier, setIsCarrier] = useState(false);
    const [bidAmount, setBitAmout] = useState("");
    const toast = useToast()
    useEffect(async ()=> {
        const isFreighter = await authHelper.getUserType() == "FREIGHTER"; 
        setIsCarrier(!isFreighter) 
    },[])

    const onSubmit =async () => {
        const user_id = await authHelper.getToken()
        const response = await apis.addBid(id, user_id, bidAmount)
        if(response.status == "success")
             toast.show({
                description: "Bid Placed Successfully.",
                bgColor: "green.600",
            });
        else 
            toast.show({
                description: "Some Error Occured While Bidding.",
                bgColor: "red.600",
            });
    }
    return (
        <Box px={3} py={3} bgColor={"white"} rounded={10} mb={4}>
            <VStack>
                <Box borderBottomWidth="1" borderColor={"blueGray.200"} pb={2}>
                    <HStack space={5} alignItems={"center"}>
                        <Image
                            size={15}
                            source={loadingImage}
                            alt="Alternate Text"
                        />
                        <Text bold>Source: {loadingPoint}</Text>
                        <Badge ml={70} variant="outline" colorScheme={isActive ? "warning" : "success"}>{isActive ? "Load Created" : "Trip Created" }</Badge>
                    </HStack>
                    <HStack space={5} alignItems={"center"}>
                        <Image
                            size={15}
                            source={unloadingImage}
                            alt="Alternate Text"
                        />
                        <Text bold>Destination: {unloadingPoint}</Text>
                    </HStack>
                </Box>
                <Box mt={1}>
                    <HStack space={1}>
                        <Text bold color={"blueGray.500"}>
                            Weight: {weight} MT
                        </Text>

                        <Text ml={120} bold color={"blueGray.500"}>
                            Budget: Rs. {max_amount}
                        </Text>
                    </HStack>

                    <HStack space={1} mt={2}>
                        <Text mt={1} bold color={"blueGray.700"}>
                            {date ? moment(date).format("DD-MM-YYYY") : ""}
                        </Text>

                        { isActive && isCarrier ? 
                        <HStack ml={78} height={10}>
                            <Input width={24} mr={1} placeholder="Bid Amount." onChangeText={(value)=>setBitAmout(value)}/>
                            <Button onPress={onSubmit}>Submit</Button>
                        </HStack>
                            :
                        null}
                        
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
}

export default LoadItem;