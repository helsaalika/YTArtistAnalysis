import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NFT from "components/card/NFT";
import axios from "axios";

import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft1.png";
import Nft5 from "assets/img/nfts/Nft2.png";
import Nft6 from "assets/img/nfts/Nft3.png";
import Nft7 from "assets/img/nfts/Nft1.png";
import Nft8 from "assets/img/nfts/Nft2.png";
import Nft9 from "assets/img/nfts/Nft3.png";
import Nft10 from "assets/img/nfts/Nft3.png";

const Artist = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/data");
        setChannels(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const nftImages = [Nft1, Nft2, Nft3, Nft4, Nft5, Nft6, Nft7, Nft8, Nft9, Nft10];
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap="20px" width="100%">
        {channels.map((channel, index) => (
          <NFT key={channel._id} name={channel.channel_name} image={nftImages[index % nftImages.length]} id_channel={channel._id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Artist;
