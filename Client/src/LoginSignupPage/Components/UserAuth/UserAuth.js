import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userAction } from "../../Actions/userAction";
import { USER_ACTIONS } from "../../Reducers/userReducer";
import AuthSuccess from "../AuthSuccess/AuthSuccess";
import Email from "../Email/Email";
import Mobile from "../Mobile/Mobile";
import Otp from "../Otp/Otp";
import "./UserAuth.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
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
import { useToast } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { OAuthButtonGroup } from "../OAuthButton/OAuthButton";
import { PasswordField } from "../Password/Password";

// import db from "../../db.json";

const UserAuth = () => {
  const toast = useToast();
  const handleSignin = async () => {
    let obj = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    if (obj.email === "" || obj.password === "") {
      toast({
        title: "Login Failed!!",
        description: "Fill all the details to Login..",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      console.log("inside");
      let res = await fetch(
        "https://tata-cliq-server.onrender.com/users/login",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(obj),
        }
      );
      let data = await res.json();
      console.log(res);
      console.log(data);
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
            style={{ width: "10%", margin: "auto" }}
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
            <br />
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Link to={"/signup"}>
                <Button variant="solid">Sign up</Button>
              </Link>
            </HStack>
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
                <Input id="email" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Password</FormLabel>
                <Input id="password" type="password" />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="solid" onClick={handleSignin} colorScheme="red">
                Sign in
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

export default UserAuth;
