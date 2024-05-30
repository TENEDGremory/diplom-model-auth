"use client"

import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { CiTrash } from "react-icons/ci";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useCurrentUser } from "@/hooks/use-current-user";
import { CiShoppingBasket } from "react-icons/ci";
import { deleateCartBasket } from "@/actions/cart-basket";
import { useState } from "react";




const ShopBasket = ({ cartBasket}: { cartBasket: Array<any> }) => {
  const user = useCurrentUser();
  const userId = user?.id || undefined


  return (
    <div className="flex justify-end" >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <CiShoppingBasket className="w-[50px] h-[50px] " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="" align="end">
          <DropdownMenuItem className="flex flex-col space-y-4" >
            {cartBasket.map((cart) => (
              <div key={cart.id}>
                {userId === cart.userId ?
                  <Card key={cart.id} className="w-[400px] p-2 shadow-md flex justify-between items-center">
                    <CardHeader className="w-[80px] shadow-lg p-0">
                      <Image priority src={cart.imageId} width={80} height={70} alt={cart.name} className="object-cover h-[70px] rounded-md transition duration-300 " />
                    </CardHeader>
                    <CardContent className="w-full p-2 pt-0 flex justify-between">
                      <p>
                        {cart.name}
                      </p>
                      <p>
                        {cart.price} $
                      </p>
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button variant="link" size="icon" onClick={() => deleateCartBasket(cart.id)} >
                        <CiTrash className="w-10 h-10" />
                      </Button>
                    </CardFooter>
                  </Card>
                  : ""}
              </div>
            ))}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ShopBasket;



{/* <CiShoppingBasket className="w-[50px] h-[50px] " />
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
      ))} */}