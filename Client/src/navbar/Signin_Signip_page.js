import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../ProductSection/Context/Context";
import React from "react";

function SigninSignup() {
  let [loginCheck, setloginCheck] = React.useState(false);
  let [image, setImage] = React.useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  let navigate = useNavigate();

  useEffect(() => {
    let a = localStorage.getItem("userId");
    if (a) {
      setloginCheck(true);
      getData();
    }
  });

  const getData = async () => {
    let id = localStorage.getItem("userId");
    let res = await fetch(`https://tata-cliq-server.onrender.com/users/${id}`);
    let { data } = await res.json();
    // console.log(data.avatar);
    setImage(data.avatar);
  };

  if (loginCheck) {
    return (
      <>
        {" "}
        <Popover>
          <PopoverTrigger>
            <Box display="flex">
              <Box>
                <Button
                  size="sm"
                  _hover={{ bg: "black" }}
                  color="white"
                  bg="black"
                  mt={1}
                  w="50px"
                >
                  {/* <i className="fa-solid fa-user"></i> */}
                  <img
                    style={{ width: "100%", borderRadius: "50%" }}
                    src={image}
                    alt="profile"
                  />
                </Button>
              </Box>
              <Box color="white" mt={2} ml={-1}>
                <ChevronDownIcon />
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent w="180px" textAlign={"left"}>
            <PopoverArrow />
            <PopoverBody>
              {localStorage.getItem("userId") ? (
                <Link to="/myaccount">
                  <Box ml={3}>
                    <h1>My Account</h1>
                  </Box>
                </Link>
              ) : (
                ""
              )}
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Alert & Coupon</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Order History</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>My WishList</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Gift Card</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>CLiq Cash</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <button
                  onClick={() => {
                    localStorage.clear();
                    setloginCheck(false);
                    navigate("/");
                  }}
                >
                  LogOut
                </button>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  } else {
    return (
      <>
        <Popover>
          <PopoverTrigger>
            <Button
              size="sm"
              _hover={{ bg: "black" }}
              color="white"
              bg="black"
              mt={1}
              fontWeight="400"
            >
              Sign in/Sign up
            </Button>
          </PopoverTrigger>
          <PopoverContent w="180px" textAlign={"left"}>
            <PopoverArrow />
            <PopoverBody>
              <Button
                _hover={{ bg: "#F0FFF0", color: "blue" }}
                bg="#FF1744"
                size="sm"
                mt={1}
                ml={3}
                borderRadius="lg"
                color="white"
              >
                <Link to="/authenticate">Login/Register</Link>
              </Button>
            </PopoverBody>
            <PopoverBody>
              {localStorage.getItem("userId") ? (
                <Link to="/myaccount">
                  <Box ml={3}>
                    <h1>My Account</h1>
                  </Box>
                </Link>
              ) : (
                ""
              )}
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Alert & Coupon</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Order History</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>My WishList</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Gift Card</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>CLiq Cash</h1>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  }
}

export default SigninSignup;
