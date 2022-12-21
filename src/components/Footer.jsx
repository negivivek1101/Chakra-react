import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size={"sm"} textTransform={"uppercase"}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter E-mail here"
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor={"none"}
            />
            <Button
              p={"0"}
              colorScheme={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading size={"md"} textAlign={"center"}>
            ViTube
          </Heading>
          <Text py={["none", "3"]}>©All Rights Reserved</Text>
        </VStack>

        <VStack w={"full"}>
          <Heading size={"sm"} textTransform={"uppercase"}>
            Social Media
          </Heading>
          <HStack py={["none", "3"]}>
            <Button variant={"link"} colorScheme={"gray"}>
              <a target={"blank"} href="https://youtube.com/">
                Youtube
              </a>
            </Button>

            <Button variant={"link"} colorScheme={"gray"}>
              <a target={"blank"} href="https://instagram.com/">
                Insta
              </a>
            </Button>

            <Button variant={"link"} colorScheme={"gray"}>
              <a target={"blank"} href="https://github.com/">
                Github
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
