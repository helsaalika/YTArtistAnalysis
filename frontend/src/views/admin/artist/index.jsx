import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import TableTopCreators from "views/admin/artist/components/TableTopCreators";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import tableDataTopCreators from "views/admin/artist/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/artist/variables/tableColumnsTopCreators";

export default function Artist() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Flex direction="column">
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
              <NFT
                name="NCT DREAM"
                author="By SM Entertaiment"
                image={Nft1}
                download="#"
              />
              <NFT name="New Jeans" author="HYBE" image={Nft2} download="#" />
              <NFT
                name="Blackpink"
                author="YG Entertaiment"
                image={Nft3}
                download="#"
              />
              <NFT
                name="NCT DREAM"
                author="By SM Entertaiment"
                image={Nft1}
                download="#"
              />
              <NFT name="New Jeans" author="HYBE" image={Nft2} download="#" />
              <NFT
                name="Blackpink"
                author="YG Entertaiment"
                image={Nft3}
                download="#"
              />
              <NFT
                name="NCT DREAM"
                author="By SM Entertaiment"
                image={Nft1}
                download="#"
              />
              <NFT name="New Jeans" author="HYBE" image={Nft2} download="#" />
              <NFT
                name="Blackpink"
                author="YG Entertaiment"
                image={Nft3}
                download="#"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px">
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
