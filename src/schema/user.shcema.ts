import z from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email(),
});

export const createUserOutputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
