import React from "react";
import logosi from "../../../assets/logo_si.png";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
// import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      {/* <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} /> */}
      <img
        src={logosi}
        height="0px"
        width="175px"
        style={{ marginBottom: "32px" }}
      />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
