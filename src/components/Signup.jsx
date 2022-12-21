import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container maxW={"container.xl"} height={"100vh"} padding={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading textAlign={"center"}>Welcome to ViTube</Heading>
          <Avatar alignSelf={"center"} boxSize={"16"} />
          <Input
            placeholder={"Name"}
            type={"name"}
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            placeholder={"Email"}
            type={"email"}
            required
            focusBorderColor={"purple.500"}
          />

          <Input
            placeholder={"Password"}
            type={"password"}
            required
            focusBorderColor={"purple.500"}
          />
          <Button variant={"link"} alignSelf={"flex-end"}></Button>
          <Button colorScheme={"purple"} type={"submit"}>
            Sign up
          </Button>
          <Text textAlign={"right"}>
            Already a member?{" "}
            <Button variant={"link"} alignSelf={"flex-end"}>
              <Link to={"/login"}>Log in</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
