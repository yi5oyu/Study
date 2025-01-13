import React from "react";
import { 
    Input, 
    InputGroup, 
    InputLeftElement, 
    InputRightElement, 
    FormControl, 
    FormLabel, 
    FormErrorMessage,
    InputLeftAddon, 
    InputRightAddon
} from "@chakra-ui/react";
import { EmailIcon, CheckIcon } from "@chakra-ui/icons";

const ChakraInput = () => {
    const isError = true;

    return (
        <>
            <Input
                placeholder="input 사이즈 sm, md, lg"
                size="md"
                bg="gray.100"
                border="2px" 
                borderRadius="lg"
            />
            <Input 
                placeholder="입력 모양 Outline Filled Flushed Unstyled" 
                variant="Outline"
                
            />
            <Input 
                placeholder="비활성화: isDisabled, 읽기 전용: isReadOnly " 
                isReadOnly 
            />
            <Input
                placeholder="포커스, 호버"
                _hover={{ bg: "gray.200" }}
                _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 2px blue.300" }}
            />
            <Input
                placeholder="반응형"
                w={["100%", "50%", "25%"]}
                size={["sm", "md", "lg"]}
            />

            // 아이콘 추가
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input placeholder="이메일을 입력하세요." />
                <InputRightElement>
                    <CheckIcon color="green.500" />
                </InputRightElement>
            </InputGroup>

            // 오류 상태
            <FormControl isInvalid={isError}>
                <FormLabel>이메일</FormLabel>
                <Input placeholder="이메일을 입력하세요." />
                {isError && <FormErrorMessage>이메일 입력 필수</FormErrorMessage>}
            </FormControl>    

            // 에드온
            <InputGroup>
                <InputLeftAddon children="+82" />
                <Input placeholder="핸드폰 번호" />
                <InputRightAddon children="@example.com" />
            </InputGroup>    
        </>
    );
};

export default ChakraInput;
