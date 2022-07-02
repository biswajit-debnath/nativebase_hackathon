import { Avatar, Box, HStack, Icon, InfoIcon, Text, VStack, Spacer, Button, Image } from 'native-base'
import React from 'react'
import loadingImage from "../assets/procurement.png"
import unloadingImage from "../assets/container.png"

function LoadItem({loadingPoint, unloadingPoint, vehicleType, vehicleCapacity, loadingDate}) {
  
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
                <HStack space={5} alignItems={"center"}>
                    <Image size={35} 
                        resizeMode={"contain"} 
                        borderRadius={250} 
                        source={loadingImage} 
                        alt="Alternate Text" />
                    <Text bold>{loadingPoint}</Text>
                </HStack>
                <HStack  space={5} mt={2.5} alignItems={"center"}>
                    <Image size={35} 
                        resizeMode={"contain"} 
                        borderRadius={250} 
                        source={unloadingImage} 
                        alt="Alternate Text" />
                    <Text bold> {unloadingPoint}</Text>
                </HStack>
            </Box>
            <Box mt={1}>
                <HStack space={1}>
                    <Text 
                        bold 
                        color={"blueGray.500"}>{vehicleType}</Text>

                    <Text 
                        ml={230}
                        bold
                        color={"blueGray.500"}>{vehicleCapacity} </Text>
                </HStack>

                <HStack space={1} mt={2}>
                    <Text 
                        mt={1}
                        bold
                        color={"blueGray.700"}>{loadingDate}</Text>

                    <Button 
                        ml={215} 
                        bgColor="blueGray.800"
                        
                        >Bids</Button>
                </HStack>

            </Box>

        </VStack>
    </Box>
  )
}

export default LoadItem