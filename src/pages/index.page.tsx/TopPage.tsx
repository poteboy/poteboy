import { useMutation } from "@src/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserInput, createUserSchema } from "@src/schema";
import { Box, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { TextInput } from "@src/components";
import { colors } from "@src/styles";

export default function Home() {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
  });

  const name = watch("name");

  const { mutate } = useMutation(["users.register-user"]);

  return (
    <Box flex={1} minH="100vh" bg={colors.baseBg}>
      <div></div>
    </Box>
  );
}
