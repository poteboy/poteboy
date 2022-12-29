import { Box, Flex, HStack, Text, Image, Card, VStack } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect, useState, useRef } from "react";
import { colors, MOBILE_SIZE } from "@src/styles";
import Link from "next/link";
import { ThemeToggle } from "..";
import { paths, PathKey, pathKeys } from "@src/constants";
import { useRouter } from "next/router";
import { ArrowIcon } from "./ArrowIcon";
import { z } from "zod";
import isEqual from "lodash.isequal";

type HeaderProps = {
  disableMenu?: boolean; // this is used when there's no H1 tag in page component
  current?: PathKey;
};

export const Header: FC<HeaderProps> = memo(({ disableMenu }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  const firstPath: PathKey = (() => {
    const path = pathKeys.safeParse(router.asPath.split("/")[1]);
    return path.success ? path.data : "index";
  })();

  const handleClickMenuItem = useCallback(() => {
    setExpanded(false);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && expanded) {
        event.preventDefault();
        setExpanded(false);
      }
    };
    const handleCloseModal = (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      if (element.closest(controlKey) == null && expanded) {
        const HTMLSchema = z.instanceof(HTMLElement);
        const _button = HTMLSchema.safeParse(ref.current);
        if (_button.success) {
          let escape = _button.data === element;
          _button.data.childNodes.forEach((node) => {
            if (isEqual(node, element)) escape = true;
          });
          if (!escape) {
            event.preventDefault();
            setExpanded(false);
          }
        }
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleCloseModal);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleCloseModal);
    };
  }, [expanded]);

  return (
    <Box
      as="header"
      w="100%"
      bg={colors.baseBgTranslucent}
      pos="sticky"
      top={0}
      zIndex={3}
      backdropBlur="blur(16px)"
      height="76px"
    >
      <Flex
        flexDir="row"
        maxW={`${MOBILE_SIZE}px`}
        h="100%"
        m="auto"
        p="16px"
        align="center"
      >
        {!disableMenu && (
          <HStack align="center" spacing={2}>
            <Link href="/">
              <Image
                src="https://pbs.twimg.com/profile_images/1571474754976219136/RN77fkuW_400x400.jpg"
                alt="poteboy"
                w="44px"
                borderRadius="50%"
              />
            </Link>
            <HStack spacing={1} as="nav">
              <Link {...paths.index}>
                <Text>poteboy</Text>
              </Link>
              <Text color={colors.baseTextLight}>/</Text>
              <Box as="ul" pos="relative">
                <Flex
                  as="button"
                  listStyleType="none"
                  flexDir="row"
                  align="end"
                  aria-expanded={expanded}
                  aria-haspopup="menu"
                  aria-controls={controlKey}
                  onClick={() => setExpanded((e) => !e)}
                  ref={ref}
                >
                  <Text as="span">{firstPath}</Text>
                  <ArrowIcon
                    color={colors.baseText}
                    style={{
                      transform: `rotate(${expanded ? 180 : 0}deg)`,
                      transition: "0.1s",
                    }}
                  />
                </Flex>
                <Card
                  id={controlKey}
                  role="menu"
                  pos="absolute"
                  visibility={expanded ? "visible" : "hidden"}
                  padding={4}
                  bg={colors.baseBgLight}
                  // boxShadow="0 8px 16px -2px rgb(255 255 0 / 40%)"
                  boxShadow="0 8px 16px -2px rgb(0 0 0 / 40%)"
                >
                  <VStack spacing={2}>
                    {menuItems.map((item) => {
                      return (
                        <Link
                          {...item.path}
                          key={item.name}
                          style={{ width: "fit-content" }}
                          onClick={handleClickMenuItem}
                        >
                          <HStack as="li">
                            <Text>{item.name}</Text>
                          </HStack>
                        </Link>
                      );
                    })}
                  </VStack>
                </Card>
              </Box>
            </HStack>
          </HStack>
        )}
        <Box ml="auto" display="grid">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
});

const controlKey = "nav-menu";

const menuItems = [
  {
    name: "Home",
    path: paths.index,
  },
  {
    name: "About",
    path: paths.about,
  },
  {
    name: "Blog",
    path: paths.blog,
  },
];

Header.defaultProps = {
  disableMenu: false,
};
