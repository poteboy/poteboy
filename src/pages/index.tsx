import Link from "next/link";
import {
  Box,
  Image,
  Container,
  Spacer,
  Text,
  HStack,
  VStack,
  keyframes,
  Card,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Header, PageMeta, RouterLink } from "@src/components";
import { colors, useColorTheme } from "@src/styles";
import { paths } from "@src/constants";

// 1 = 4px

export default function Home() {
  return (
    <Box flex={1} minH="100vh" bg={colors.baseBg}>
      <PageMeta />
      <Header disableMenu />
      <Container as="main">
        <Spacer h={16} />
        <HStack spacing={8} animation={animation(0)} as="section">
          <Link {...paths.index} style={{ width: "fit-content" }}>
            <Image
              src="https://pbs.twimg.com/profile_images/1571474754976219136/RN77fkuW_400x400.jpg"
              alt="poteboy"
              w="100px"
              borderRadius="50%"
            />
          </Link>
          <VStack align="baseline" spacing={4}>
            <Text variant="heading" as="h1">
              poteboy 🍑
            </Text>
            <Text color={colors.baseTextLight}>
              a software developer, digital creator and an amature kickboxer
            </Text>
            <Card
              bg={colors.baseBgLight}
              boxShadow="none"
              padding="4px 12px"
              w="100%"
            >
              <Text variant="caption">
                詳しいプロフィールは
                <RouterLink href="/about" as="/about">
                  こちら
                </RouterLink>
                から
              </Text>
            </Card>
          </VStack>
        </HStack>
        <Spacer h={4} />
      </Container>
    </Box>
  );
}

const FadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const animation = (delay = 0) => `${FadeInUp} 0.4s forwards ${delay}s`;

// const RouterLink = styled(Link)`
//   text-decoration: underline;
//   text-decoration-thickness: 0.5px;
//   text-underline-offset: 0.1em;
//   color: ${colors.baseTextLink};
// `;
