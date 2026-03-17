
"use server";

import { z } from "zod";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function login(values: z.infer<typeof loginSchema>): Promise<{ error?: string; success?: boolean }> {
  const parsedValues = loginSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: "Invalid input" };
  }

  const { username, password } = parsedValues.data;

  const validUsername = process.env.LOGIN_USERNAME;
  const validPassword = process.env.LOGIN_PASSWORD;

  if (username === validUsername && password === validPassword) {
    return { success: true };
  } else {
    return { error: "Nom d'utilisateur ou mot de passe incorrect." };
  }
}
