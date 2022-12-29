import type { NextPage } from "next";
import { Header, PageMeta } from "@src/components";
import { Box, Spacer, Container, Text } from "@chakra-ui/react";
import { colors, useColorTheme } from "@src/styles";

export const About: NextPage = () => {
  return (
    <Box bg={colors.baseBg} minH="100vh">
      <PageMeta title="About | Poteboy" />
      <Header />
      <Spacer h={4} />
      <Container>
        <Text variant="heading" as="h1">
          About
        </Text>
        <Spacer h={4} />
        <Text>プログラマーやってます</Text>
      </Container>
    </Box>
  );
};

export default About;
