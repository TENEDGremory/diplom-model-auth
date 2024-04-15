"use server"

import * as z from "zod"

import { ResetSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"

export const reset = async (values: z.infer<typeof ResetSchema>) =>{
  const validationFields = ResetSchema.safeParse(values);

  if(!validationFields.success) {
    return { error: "Invalid email" };
  }

  const { email } = validationFields.data;

  const existingUser = await getUserByEmail(email);

  if(!existingUser){
    return { error: "Email not found!"};
  }

  return { success: "Reset email sent!" };
}