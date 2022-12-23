import { useMutation } from "@src/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserInput, createUserSchema } from "@src/schema";
import { Box, Image, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { TextInput } from "@src/components";
import { colors } from "@src/styles";

export default function Home() {
  return (
    <Box flex={1} minH="100vh" bg={colors.baseBg}>
      <Container as="main">
        <Image
          src="https://pbs.twimg.com/profile_images/1571474754976219136/RN77fkuW_400x400.jpg"
          alt=""
          w="100px"
          borderRadius="50%"
        />
      </Container>
    </Box>
  );
}
