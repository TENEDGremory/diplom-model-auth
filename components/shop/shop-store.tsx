"use client"

import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"

import { Button } from "@/components/ui/button";
import { createCartBasket } from "@/actions/cart-basket";
import { useCurrentUser } from "@/hooks/use-current-user";

const ShopStore = ({ storeCard }: { storeCard: Array<any> }) => {

  const user = useCurrentUser();

  return (
    <div className="relative grid grid-cols-4 z-10 mx-auto col-span-5 col-start-2">
      {storeCard.map((card) => (
        <Card key={card.id} className="w-[300px] m-2 shadow-md space-y-4 border-none">
          <CardHeader className="w-full shadow-lg p-0">
            <Image src={card.imageId} width={300} height={400} alt={card.name} className="object-cover h-[400px] rounded-t-md transition duration-300 " />
          </CardHeader>
          <CardContent className="p-2 pt-0 flex justify-between">
            <p>{card.name}</p>
            <p>{card.price} $</p>
          </CardContent>
          <CardFooter className="p-2 pt-0">
            <Button className="w-full " variant="default" size="sm"
              onClick={() => {
                createCartBasket({ name: card.name, imageId: card.imageId, price: card.price, userId: user?.id! });
              }}>
              Add cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


export default ShopStore;