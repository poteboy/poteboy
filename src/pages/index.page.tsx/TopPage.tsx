import Link from "next/link";
import { Box, Image, Container, Spacer, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { ThemeToggle, Header } from "@src/components";
import { colors, useColorTheme } from "@src/styles";

export default function Home() {
  const { changeTheme } = useColorTheme();

  return (
    <Box flex={1} minH="100vh" bg={colors.baseBg}>
      <Header />
      <Container as="main" bg={colors.baseBgLight}>
        <Spacer h="80px" />
        <Link href="/">
          <Image
            src="https://pbs.twimg.com/profile_images/1571474754976219136/RN77fkuW_400x400.jpg"
            alt=""
            w="100px"
            borderRadius="50%"
          />
        </Link>
      </Container>
    </Box>
  );
}
