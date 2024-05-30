"use server"

import * as z from "zod";

import { db } from "@/lib/db"
import { CartSchema } from "@/schemas";
import { cookies } from "next/headers";

export const createCartBasket = async (values: z.infer<typeof CartSchema>) =>{
  const validatedFields = CartSchema.safeParse(values);

  if(!validatedFields.success){
    return;
  }

  const {imageId, name, price, userId } = validatedFields.data;

  await db.cartBasket.create({
    data:{
      imageId,
      name,
      price,
      userId
    }
  })
}

export const deleateCartBasket = async (id : string) =>{

  await db.cartBasket.delete({
    where: {id}
  })
}