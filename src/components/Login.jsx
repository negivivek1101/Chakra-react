import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Heading textAlign={"center"}>Welcome back</Heading>
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
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgotpassword"}>Forgot password</Link>
          </Button>
          <Button colorScheme={"purple"} type={"submit"}>
            Log in
          </Button>
          <Text textAlign={"right"}>
            New member?{" "}
            <Button variant={"link"} alignSelf={"flex-end"}>
              <Link to={"/signup"}>Sign up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
