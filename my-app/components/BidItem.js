import { Box, Button, HStack, Image, Text, useToast, VStack } from 'native-base'
import { useEffect, useState } from 'react'
import unloadingImage from "../assets/container.png"
import authHelper from '../utils/authHelper'
import apis from '../apis'

export default function BidItem({name:carrierName, vehicleName:vehicleType, amount, id}) {
    const [isCarrier, setIsCarrier] = useState(false);
    const toast = useToast();
    
    useEffect(async ()=> {
        const isFreighter = await authHelper.getUserType() == "FREIGHTER"; 
        setIsCarrier(!isFreighter) 
    },[])

    const acceptBid =async ()=> {
       const response =  await apis.acceptBid(id);
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
    const rejectBid =async ()=> {
        
        const response = await apis.rejectBid(id); 
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
    <Box 
        px={3}
        py={3} 
        bgColor={'white'}
        rounded={10}
        mb={4}>
        <VStack>
            <Box 
                borderBottomWidth="1"
                borderColor={"blueGray.200"} 
                pb={2}>
                <HStack  space={5} mt={2.5} alignItems={"center"}>
                    <Image size={35} 
                        resizeMode={"contain"} 
                        borderRadius={250} 
                        source={unloadingImage} 
                        alt="Alternate Text" />
                    <Text bold> {carrierName}</Text>
                </HStack>
            </Box>
            <Box mt={1}>
                <HStack space={1}>
                    <Text 
                        bold 
                        color={"blueGray.500"}>{vehicleType}</Text>

                </HStack>

                <HStack space={1} mt={2}>
                    <Text 
                        mt={1}
                        bold
                        color={"blueGray.700"}>{"Bid Amount: Rs. " + amount}</Text>

                    {!isCarrier ? 
                        <HStack ml={70}>
                            <Button 
                            bgColor = "blueGray.800"
                            onPress = {acceptBid}
                            >Accept</Button>
                        <Button 
                            ml={1} 
                            bgColor="red.600"
                            onPress = {rejectBid}
                            >Reject
                        </Button>
                    </HStack>: <Text ml={120}>Carrier Bid</Text>}
                </HStack>
            </Box>
        </VStack>
    </Box>
  )
};