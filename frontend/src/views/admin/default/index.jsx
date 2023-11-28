import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Box, Flex, FormLabel, Icon, Select, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import Usa from "assets/img/dashboards/usa.png";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { MdBarChart, MdAttachMoney, MdAddTask, MdFileCopy } from "react-icons/md";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import ComplexTable from "views/admin/default/components/ComplexTable";
import Banner from "views/admin/marketplace/components/Banner";
import { columnsDataComplex } from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

const UserReports = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/data");
        // Menambahkan id_channel pada setiap elemen data
        const channelsWithId = response.data.map((channel) => ({
          ...channel,
          id_channel: channel._id, // Sesuaikan dengan properti id_channel yang sesuai
        }));
        setChannels(channelsWithId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {channels.map((channel) => (
        <React.Fragment key={channel.id_channel}>
          {channel.id_channel === "656367de3c1a9cd62f56ba29" && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }} gap="20px" mb="20px">
              <MiniStatistics startContent={<IconBox w="56px" h="56px" bg={boxBg} icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />} />} name="Account Subscribers" value="36500" />
              <MiniStatistics startContent={<IconBox w="56px" h="56px" bg={boxBg} icon={<Icon w="50px" h="32px" as={MdAttachMoney} color={brandColor} />} />} name="Account Engagement" value="620927.8653846154" />
              <MiniStatistics startContent={<IconBox w="56px" h="56px" bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)" icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />} />} name="Total Views" value="32288249" />
              <MiniStatistics startContent={<IconBox w="56px" h="56px" bg={boxBg} icon={<Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />} />} name="Total Video" value="52" />
            </SimpleGrid>
          )}

          {/* Add more conditions for other id_channel values */}
        </React.Fragment>
      ))}

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <WeeklyRevenue />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />
        <Flex flexDirection="column" columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <Banner />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default UserReports;
