// import {
//   Heading,
//   Avatar,
//   Box,
//   Center,
//   Text,
//   Stack,
//   Button,
//   Badge,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";


// export default function SocialProfileSimple() {
 

//   return (
//     <Center py={6}>
//       <Box
//         maxW={"320px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.900")}
//         boxShadow={"2xl"}
//         rounded={"lg"}
//         p={6}
//         textAlign={"center"}
//       >
//         <Avatar
//           size={"xl"}
//           src={
//             state.avatar
//           }
//           alt={"Avatar Alt"}
//           mb={4}
//           pos={"relative"}
//           _after={{
//             content: '""',
//             w: 4,
//             h: 4,
//             bg: "green.300",
//             border: "2px solid white",
//             rounded: "full",
//             pos: "absolute",
//             bottom: 0,
//             right: 3,
//           }}
//         />
//         <Heading fontSize={"2xl"} fontFamily={"body"}>
//           {state.name}
//         </Heading>
//         <Text fontWeight={600} color={"gray.500"} mb={4}>
//         {state.email}
//         </Text>
//         {/* <Text
//           textAlign={"center"}
//           color={useColorModeValue("gray.700", "gray.400")}
//           px={3}
//         >
//           Actress, musician, songwriter and artist. PM for work inquires or{" "}
//           <Link href={"#"} color={"blue.400"}>
//             #tag
//           </Link>{" "}
//           me in your posts
//         </Text> */}

//         <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
//           <Badge
//             px={2}
//             py={1}
//             bg={useColorModeValue("gray.50", "gray.800")}
//             fontWeight={"400"}
//           >
//             #art
//           </Badge>
//           <Badge
//             px={2}
//             py={1}
//             bg={useColorModeValue("gray.50", "gray.800")}
//             fontWeight={"400"}
//           >
//             #photography
//           </Badge>
//           <Badge
//             px={2}
//             py={1}
//             bg={useColorModeValue("gray.50", "gray.800")}
//             fontWeight={"400"}
//           >
//             #music
//           </Badge>
//         </Stack>

//         <Stack mt={8} direction={"row"} spacing={4}>
//           <Button
//             flex={1}
//             fontSize={"sm"}
//             rounded={"full"}
//             _focus={{
//               bg: "gray.200",
//             }}
//           >
//             Wishlist
//           </Button>
//           <Link to="/cart">
//             <Button
//               flex={1}
//               fontSize={"sm"}
//               rounded={"full"}
//               bg={"red.600"}
//               color={"white"}
//               boxShadow={
//                 "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
//               }
//               _hover={{
//                 bg: "red.500",
//               }}
//               _focus={{
//                 bg: "blue.500",
//               }}
//             >
//               Go to Cart
//             </Button>
//           </Link>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }
