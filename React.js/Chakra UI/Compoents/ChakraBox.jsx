import React from "react";
import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Text,
  } from "@chakra-ui/react";


const ChakraBox = () => {
    
    return (
        <>
            <Box w="200px" h="100px" 
                maxWidth="100%" minWidth="300px" 
                maxHeight="100%" minHeight="100px" 
                display="block" overflow="hidden"
                bg="gray.100"
                p="2px" m="5px"
            >
                레이아웃
            </Box>
            <Box boxSize="150px" 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center"
                flexWrap="wrap"
                gap="10px"
                bg="gray.200"
                mt="1px" mb="2px" ml="3px" mr="4px"
            >
                Flexbox
            </Box>
            <Box display="grid" 
                gridTemplateColumns="repeat(3, 1fr)" 
                gridTemplateRows="repeat(2, 1fr)"
                gap="10px"
                bg="gray.300"
                pt="1px" pb="2px" pl="3px" pr="4px"
                border="1px"
            >
                <Box                 
                    borderWidth="1px"
                    borderColor="red.400"
                    borderRadius="md"
                >
                    Grid 1
                </Box>
                <Box
                    borderWidth="2px"
                    borderStyle="dashed"
                    borderColor="blue.400"
                >
                    Grid 2
                </Box>
                <Box
                    borderTop="1px"
                    borderBottom="2px"
                    borderLeft="8px"
                    borderRight="4px"
                    borderColor="green.400"
                >
                    Grid 3
                </Box>
            </Box>
            <Box              
                bgImage="url('https://blog.kakaocdn.net/dn/bucc5A/btsJKwgYmZC/XW3Lp4u3REkzNffK0Fjqrk/img.webp')"
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                h="250px"
            >
            </Box>
            <Box 
                boxShadow="md" 
                p="10px" m="10px" 
                w="200px" h="100px"
                bg="gray.100"
                color="red.400"
                fontSize="20px"
                fontWeight="bold"
                textAlign="center"
                lineHeight="20px"
            >
                그림자, 텍스트
            </Box>
            <Box 
                position="absolute"
                top="50px"
                left="500px"
                bg="green.400"
            >
                absolute
            </Box>
            <Box 
                w={['100%', '50%', '25%']} 
                p={[2, 4, 6]} 
                bg="green.300"
            >
                반응형
            </Box>
        </>
    );
};

export default ChakraBox;
