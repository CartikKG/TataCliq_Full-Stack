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
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  let navigate = useNavigate();
  const toast = useToast();
  const handleSignup = async () => {
    document.getElementById("signup").innerText = "Loading.....";
    document.getElementById("signup").disabled = true;
    let obj = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      avatar: document.getElementById("avatar_url").value,
      name: document.getElementById("userName").value,
    };
    if (
      obj.email === "" ||
      obj.password === "" ||
      obj.avatar === "" ||
      obj.name === ""
    ) {
      toast({
        title: "SignUp Failed!!",
        description: "Fill all the details to Signup..",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      document.getElementById("signup").innerText = "Sign Up";
      document.getElementById("signup").disabled = false;
    } else {
       let res = await fetch(
        "https://tata-cliq-server.onrender.com/users/register",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(obj),
        }
      );
      let data = await res.json();
      if (data.data !== " Users Alrady exists with the given email") {
        toast({
          title: "SignUp Successful",
          description: "Login to Continue..",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        navigate("/authenticate");
      } else {
        toast({
          title: "SignUp Failed!!",
          description:
            "User already exist with given Mail_Id \n Kindly Login...",
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("avatar_url").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("signup").innerText = "Sign Up";
        document.getElementById("signup").disabled = false;
      }
    }
  };

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
            style={{ width: "10%", margin: "auto", borderRadius: "4%" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Tata_Cliq_logo.svg/1200px-Tata_Cliq_logo.svg.png"
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
                <Input
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  required={true}
                  id="email"
                  type="email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input required={true} id="password" type="password" />
              </FormControl>
            </Stack>
            <Stack spacing="5">
              <FormControl>
                <FormLabel>Avatar URL</FormLabel>
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
              <Button
                onClick={handleSignup}
                id="signup"
                variant="solid"
                colorScheme="red"
              >
                Sign Up
              </Button>
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
