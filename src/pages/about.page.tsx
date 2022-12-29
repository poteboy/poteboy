import type { NextPage } from "next";
import { Header } from "@src/components";
import { Box } from "@chakra-ui/react";
import { colors, useColorTheme } from "@src/styles";

export const About: NextPage = () => {
  return (
    <Box bg={colors.baseBg} minH="100vh">
      <Header />
    </Box>
  );
};

export default About;
