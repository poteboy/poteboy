import { Box, Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { colors, MOBILE_SIZE } from "@src/styles";
import { ThemeToggle } from "..";

export const Header: FC = memo(() => {
  return (
    <Box as="header" w="100%" bg={colors.baseBgTranslucent} h="62px">
      <Flex
        flexDir="row"
        maxW={`${MOBILE_SIZE}px`}
        h="100%"
        m="auto"
        p="8px 16px"
        align="center"
      >
        <Box ml="auto" display="grid">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
});
