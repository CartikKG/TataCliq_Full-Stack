import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { OAuthButtonGroup } from "../OAuthButton/OAuthButton";
import { PasswordField } from "../Password/Password";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container
      maxW="lg"
      py={{
        base: "1",
        md: "4",
      }}
      px={{
        base: "0",
        sm: "1",
      }}
    >
      <Stack spacing="">
        <Stack spacing="2">
          <img
            style={{ width: "10%", margin: "auto", borderRadius: "10px" }}
            src="./Tata_Assets/logo.png"
            alt=""
          />
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            {/* <Heading
            size={useBreakpointValue({
              base: "xs",
              md: "sm",
            })}
          >
            Log in to your account
          </Heading> */}
            {/* <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Link to={"/signup"}>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </Link>
          </HStack> */}
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={useBreakpointValue({
            base: "transparent",
            sm: "bg-surface",
          })}
          boxShadow={{
            base: "none",
            sm: useColorModeValue("md", "md-dark"),
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input required={true} id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <Stack spacing="5">
              <FormControl>
                <FormLabel>Avatar Url</FormLabel>
                <Input required={true} id="avatar_url" type="text" />
              </FormControl>
            </Stack>
            <Stack spacing="5">
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input required={true} id="userName" type="text" />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="solid">Sign Up</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Signup;
