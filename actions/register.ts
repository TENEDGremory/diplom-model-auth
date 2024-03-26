"use server"

import bcrypt from "bcryptjs";
import * as z from "zod";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) =>{
  const validatedFields = RegisterSchema.safeParse(values);

  if(!validatedFields.success){
    return {
      error: "Invalid fields!"
    }
  }

  const { email, password, name} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserEmail(email);

  if(existingUser){
    return {error: "Email already in use!"}
  }

  await db.user.create({
    data:{
      name,
      email,
      password: hashedPassword,
    }
  })

  return {successs : "User created!"}
};