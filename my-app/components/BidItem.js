import { Avatar, Box, HStack, Icon, InfoIcon, Text, VStack, Spacer, Button, Image } from 'native-base'
import React from 'react'
import loadingImage from "../assets/procurement.png"
import unloadingImage from "../assets/container.png"

export default function BidItem({carrierName, vehicleType, amount}) {
  
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
                        color={"blueGray.700"}>{"Rs. " + amount}</Text>

                    <Button 
                        ml={145} 
                        bgColor="blueGray.800"
                        
                        >Accept</Button>
                    <Button 
                        ml={1} 
                        bgColor="red.600"
                        
                        >Reject</Button>
                </HStack>

            </Box>

        </VStack>
    </Box>
  )
};