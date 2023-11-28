// Chakra imports
import { AvatarGroup, Avatar, Box, Button, Flex, Icon, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

export default function NFT(props) {
  const { image, name, author, id_channel } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue("navy.700", "white");
  const handleRedirect = () => {
    window.location.href = `/admin/default/${id_channel}`;
  };

  return (
    <Card p="20px">
      <Flex direction={{ base: "column" }} justify="center" alignItems="center">
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <Image src={image} w={{ base: "100%", "3xl": "100%" }} h={{ base: "100%", "3xl": "100%" }} borderRadius="20px" />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon transition="0.2s linear" w="20px" h="20px" as={like ? IoHeart : IoHeartOutline} color="brand.500" />
          </Button>
        </Box>
        <Flex flexDirection="column" justify="center" alignItems="center" mt="10px">
          <Text
            color={textColor}
            fontSize={{
              base: "xl",
              md: "lg",
              lg: "lg",
              xl: "lg",
              "2xl": "md",
              "3xl": "lg",
            }}
            mb="5px"
            fontWeight="bold"
            me="14px"
            textAlign="center" // Center the text
          >
            {name}
          </Text>
          <Flex align="start" justify="center" mt="10px">
            <Button variant="darkBrand" color="white" fontSize="sm" fontWeight="500" borderRadius="70px" px="24px" py="5px" onClick={handleRedirect}>
              View Detail
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
