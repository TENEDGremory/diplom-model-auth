"use client"

import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

interface CardProps{
  name: string,
  imageId: string,
  price: number,
  id: string,
}

import { CiShoppingBasket } from "react-icons/ci";


export const ShopCardBasket : CardProps[] = [];

const ShopBasket = () => {
  return(
    <div>
      <CiShoppingBasket />
      {ShopCardBasket.map((card) => (
        <Card key={card.id} className="group/card w-[300px] m-2 p-4 shadow-md space-y-4">
          <CardHeader className="w-[260px] overflow-hidden border-2 border-sky-200 rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 mx-auto shadow-lg">
            <Image priority src={card.imageId} width={260} height={260} alt={card.name} className="object-cover h-[260px] rounded-sm transition duration-300 group-hover/card:scale-105" />
          </CardHeader>
          <CardContent className="p-0">
            {card.name} {card.price} $
          </CardContent>
          <CardFooter className="p-0">
            <Button variant="default" size="sm" onClick={() => {ShopCardBasket.push(card)} }>
              Add cart 
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ShopBasket;